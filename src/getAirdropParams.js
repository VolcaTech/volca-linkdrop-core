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

    let tokenSymbol, claimAmount, tokenDecimals, referralAmount;
    
    if (tokenAddress !== '0x0000000000000000000000000000000000000000') { 

	// for tokens
	// get token object at token address
	const token = getToken(tokenAddress, web3);

	// get token decimals from the token contract
	tokenDecimals = await token.decimalsPromise();
	tokenDecimals = tokenDecimals.toNumber();

	// get token symbol from the token contract    
	tokenSymbol = await token.symbolPromise();

	// get claim amount (in atomic values) from the airdrop contract        
	claimAmount = await contract.CLAIM_AMOUNT_Promise();
	claimAmount = claimAmount.shift(-1 * tokenDecimals).toNumber();

	referralAmount = await contract.REFERRAL_AMOUNT_Promise();
	referralAmount = referralAmount.shift(-1 * tokenDecimals).toNumber();
	
    } else {
	// if only ether is sent
	
	tokenSymbol = 'ETH';
	claimAmount = await contract.CLAIM_AMOUNT_ETH_Promise();
	claimAmount = claimAmount.shift(-18).toNumber();
	tokenDecimals = 18;
	referralAmount = 0;
    }
    
    return {
        tokenSymbol,
        claimAmount,
        tokenAddress,
	referralAmount
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
