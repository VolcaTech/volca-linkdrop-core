import './utilities/SafeMath.sol';
import './utilities/Stoppable.sol';
import './token/ERC721/ERC721.sol';


/**
 * @title NFT Linkdrop Contract
 * 
 */
contract NFTLinkdropContract is Stoppable {

  address public NFT_ADDRESS; // token to distribute
  address public LINKDROPPER; // linkdropper's address, which has NFTs to distribute
  address public LINKDROP_VERIFICATION_ADDRESS; // special address, used on claim to verify
  // that links signed by the linkdropper

  /**
   * @dev Contructor that sets linkdrop params 
   * @param _NFTAddress address NFT contract address to distribute
   * @param _linkdropVerificationAddress special address, used on claim to 
   *        verify that links signed by the linkdropper
   */
  constructor(address _NFTAddress,
	      address _linkdropVerificationAddress) public {
    LINKDROPPER = msg.sender;
    NFT_ADDRESS = _NFTAddress;
    LINKDROP_VERIFICATION_ADDRESS = _linkdropVerificationAddress;
  }

  /**
   * @dev Verify that address is signed with needed private key.
   * @param _transitAddress transit address assigned to transfer
   * @param _addressSigned address Signed address.
   * @param _tokenId tokenId attached to link. 
   * @param _v ECDSA signature parameter v.
   * @param _r ECDSA signature parameters r.
   * @param _s ECDSA signature parameters s.
   * @return True if signature is correct.
   */
  function verifyLinkPrivateKey(
				address _transitAddress,
				address _addressSigned,
				uint256 _tokenId,
				uint8 _v,
				bytes32 _r,
				bytes32 _s)
    public pure returns(bool success) {
    bytes32 prefixedHash = keccak256("\x19Ethereum Signed Message:\n32", _addressSigned, _tokenId);
    address retAddr = ecrecover(prefixedHash, _v, _r, _s);
    return retAddr == _transitAddress;
  }


  /**
   * @dev Verify that address is signed with needed private key.
   * @param _transitAddress transit address assigned to transfer
   * @param _addressSigned address Signed address.
   * @param _v ECDSA signature parameter v.
   * @param _r ECDSA signature parameters r.
   * @param _s ECDSA signature parameters s.
   * @return True if signature is correct.
   */
  function verifyReceiverAddress(
				 address _transitAddress,
				 address _addressSigned,
				 uint8 _v,
				 bytes32 _r,
				 bytes32 _s)
    public pure returns(bool success) {
    bytes32 prefixedHash = keccak256("\x19Ethereum Signed Message:\n32", _addressSigned);
    address retAddr = ecrecover(prefixedHash, _v, _r, _s);
    return retAddr == _transitAddress;
  }

  /**
   * @dev Verify that claim params are correct and the link key wasn't used before.  
   * @param _recipient address to receive tokens.
   * @param _tokenId NFT's id 
   * @param _transitAddress transit address provided by the airdropper
   * @param _keyV ECDSA signature parameter v. Signed by the airdrop transit key.
   * @param _keyR ECDSA signature parameters r. Signed by the airdrop transit key.
   * @param _keyS ECDSA signature parameters s. Signed by the airdrop transit key.
   * @param _recipientV ECDSA signature parameter v. Signed by the link key.
   * @param _recipientR ECDSA signature parameters r. Signed by the link key.
   * @param _recipientS ECDSA signature parameters s. Signed by the link key.
   * @return True if claim params are correct. 
   */
  function checkWithdrawal(
			   address _recipient,
			   uint256 _tokenId,
			   address _transitAddress,
			   uint8 _keyV,
			   bytes32 _keyR,
			   bytes32 _keyS,
			   uint8 _recipientV,
			   bytes32 _recipientR,
			   bytes32 _recipientS)
    public view returns(bool success) {

    // verify that link wasn't used before
    require(isLinkClaimed(_tokenId) == false);

    // verifying that key is legit and signed by LINKDROP_VERIFICATION_ADDRESS's key
    require(verifyLinkPrivateKey(LINKDROP_VERIFICATION_ADDRESS, _transitAddress, _tokenId, _keyV, _keyR, _keyS));

    // verifying that recepients address signed correctly
    require(verifyReceiverAddress(_transitAddress, _recipient, _recipientV, _recipientR, _recipientS));

    return true;
  }



  /**
   * @dev Withdraw an nft to receiver address if withdraw params are correct.
   * @param _recipient address to receive the nft.
   * @param _tokenId NFT's id    
   * @param _transitAddress transit address provided by the airdropper
   * @param _keyV ECDSA signature parameter v. Signed by the airdrop transit key.
   * @param _keyR ECDSA signature parameters r. Signed by the airdrop transit key.
   * @param _keyS ECDSA signature parameters s. Signed by the airdrop transit key.
   * @param _recipientV ECDSA signature parameter v. Signed by the link key.
   * @param _recipientR ECDSA signature parameters r. Signed by the link key.
   * @param _recipientS ECDSA signature parameters s. Signed by the link key.
   * @return True if NFT was successfully sent to receiver.
   */
  function withdraw(
		    address _recipient,
		    uint256 _tokenId,
		    address _transitAddress,
		    uint8 _keyV,
		    bytes32 _keyR,
		    bytes32 _keyS,
		    uint8 _recipientV,
		    bytes32 _recipientR,
		    bytes32 _recipientS
		    )
        public
        whenNotPaused
        whenNotStopped
    returns (bool success) {

    require(checkWithdrawal(_recipient,
			    _tokenId,
			    _transitAddress,
			    _keyV,
			    _keyR,
			    _keyS,
			    _recipientV,
			    _recipientR,
			    _recipientS));

    // send nft
    ERC721 nft = ERC721(NFT_ADDRESS);
    nft.transferFrom(LINKDROPPER, _recipient, _tokenId);

    return true;
  }


  /**
   * @dev Get boolean if link is already claimed. 
   * @param _tokenId NFT's id 
   * @return True if the transit address was already used. 
   */
  function isLinkClaimed(uint256 _tokenId)
    public view returns (bool claimed) {
    ERC721 nft = ERC721(NFT_ADDRESS);
    return nft.ownerOf(_tokenId) != LINKDROPPER;
  }

}
