import { signAddress, getAddressFromPrivateKey } from './utils';


/**
 * @desc Get API's host depending of the current Ethereum Network. 
 * @param  {String}  [networkId] - (Mainnet - '1', Ropsten - '3') 
 * @return {String} 
 */
const _getApiHost = (networkId) => {
    let serverUrl;
    switch (networkId) {
    case '1':
	serverUrl = 'https://mainnet-air.eth2phone.com';
	break;
    case '3':
	serverUrl = 'https://ropsten-air.eth2phone.com';
	break;	    
    default:
	throw new Error("Unknown network!");
	serverUrl = null;
    }
    return serverUrl;
};


/**
 * @desc Call Server API to claim tokens. 
 * @param  {String}  [claimParams]
 * @param  {String}  [NetworkId] - (Mainnet - '1', Ropsten - '3') 
 * @return {Promise} 
 */
const _callServerToClaimTokens = (claimParams, networkId) => {
    const serverUrl = _getApiHost(networkId);
    
    return fetch(`${serverUrl}/api/v1/airdrops/claim-tokens`, { 
            method: 'POST', 
            headers: {
		'Accept': 'application/json',
      		'Content-Type': 'application/json'
            },
            body: JSON.stringify(claimParams)	
	}).then((response)  => response.json());
};


/**
 * @desc Sign receiver Ethereum address with the Transit Private key from URL params and 
call server to claim tokens. 
 * @param  {String}  [receiverAddress] - Ethereum address to withdraw tokens to
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {String}  [transitPK] - Transit Private key from the URL params
 * @param  {String}  [KeyR] - Signature (r) from the URL params
 * @param  {String}  [KeyS] - Signature (s) from the URL params
 * @param  {Number}  [KeyV] - Signature (v) from the URL params
 * @param  {String}  [NetworkId] - (Mainnet - '1', Ropsten - '3') 
 * @return {Promise} 
 */
export const claimTokens = ({
    receiverAddress,
    contractAddress,
    transitPK,
    keyR,
    keyS,
    keyV,
    networkId
}) => {
    // sign receiver's address with transit private key
    const { v:receiverV, r:receiverR, s:receiverS } = signAddress({address:receiverAddress, privateKey: transitPK});
    const transitAddress = getAddressFromPrivateKey(transitPK);
    
    const claimParams = {
	transitAddress,
	receiverAddress,
	contractAddress,
	keyR,
	keyS,
	keyV,
	receiverV,
	receiverR,
	receiverS,
    };    
    
    return _callServerToClaimTokens(claimParams, networkId);
};
