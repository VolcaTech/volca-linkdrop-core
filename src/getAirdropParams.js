import Promise from 'bluebird';
import { getToken, getAddressFromPrivateKey } from './utils';
import { AIRDROP_ABI } from './metadata'; 

/**
 * @desc Get Airdrop parameters from the Airdrop Smart Contract
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {Object}  [web3] - web3 object (from web3.js lib)
 * @return {Object}
 */
export const getAirdropParams = async ({contractAddress, web3 }) => { 
    // get contract object at contractAddress
    const contract = web3.eth.contract(AIRDROP_ABI).at(contractAddress);
    Promise.promisifyAll(contract, { suffix: '_Promise' });

    // get token address form the airdrop contract
    const tokenAddress = await contract.TOKEN_ADDRESS_Promise();
    console.log({tokenAddress});

    let tokenSymbol, claimAmount, tokenDecimals, referralAmount, isPaused, isStopped;
    
    if (tokenAddress !== '0x0000000000000000000000000000000000000000') { 

	// for tokens
	// get token object at token address
	const token = getToken(tokenAddress, web3);
	let result = await Promise.all([
	    token.decimalsPromise(),
	    token.symbolPromise(),
	    contract.CLAIM_AMOUNT_Promise(),
	    contract.REFERRAL_AMOUNT_Promise(),
	    contract.paused_Promise(),
	    contract.stopped_Promise()
	]);

	console.log({result});
	
	let [
	    _tokenDecimals,	    
	    _tokenSymbol,
	    _claimAmount,
	    _referralAmount,
	    _isPaused,
	    _isStopped
	 ] = result;
	
	// get token decimals from the token contract
	tokenDecimals = _tokenDecimals.toNumber();

	// get claim amount (in atomic values) from the airdrop contract        
	claimAmount = _claimAmount.shift(-1 * _tokenDecimals).toNumber();
	referralAmount = _referralAmount.shift(-1 * _tokenDecimals).toNumber();

	isStopped = _isStopped;
	isPaused = _isPaused;
	tokenSymbol = _tokenSymbol;
    } else {
	// if only ether is sent
	
	tokenSymbol = 'ETH';
	let [
	    _claimAmount,
	    _referralAmount,
	    _isPaused,
	    _isStopped
	] = await Promise.all([
	    contract.CLAIM_AMOUNT_ETH_Promise(),
	    contract.REFERRAL_AMOUNT_Promise(),
	    contract.paused_Promise(),
	    contract.stopped_Promise()
	]);

	claimAmount = _claimAmount.shift(-18).toNumber();
	tokenDecimals = 18;
	referralAmount = _referralAmount.shift(-18).toNumber();

	isStopped = _isStopped;
	isPaused = _isPaused;
    }
    
    return {
        tokenSymbol,
        claimAmount,
        tokenAddress,
	referralAmount,
	isPaused,
	isStopped
    };
}


/**
 * @desc Check if link has been claimed before
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {String}  [transitPK] - Transit Private key from the URL params
 * @param  {Object}  [web3] - web3 object (from web3.js lib)
 * @return {Boolean}
 */
export const isLinkClaimed = async ({contractAddress, transitPK, web3 }) => { 
    // get contract object at contractAddress
    const contract = web3.eth.contract(AIRDROP_ABI).at(contractAddress);
    Promise.promisifyAll(contract, { suffix: '_Promise' });

    // generate address from the transit private key
    const transitAddress = getAddressFromPrivateKey(transitPK);

    // is the link was already claimed (boolean)
    const linkClaimed = await contract.isLinkClaimed_Promise(transitAddress);
    
    return linkClaimed;
}
