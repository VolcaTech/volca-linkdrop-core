import Promise from 'bluebird';
import { AIRDROP_ABI } from './metadata'; 

/**
 * @desc Get withdrawal events for erc20 linkdrop
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {Object}  [web3] - web3 object (from web3.js lib)
 * @return {Boolean}
 */
export const getWithdrawalEvents = async ({contractAddress, web3 }) => { 
    // get contract object at contractAddress
    const contract = web3.eth.contract(AIRDROP_ABI).at(contractAddress);
    //Promise.promisifyAll(contract, { suffix: 'Promise' });
    
    return new Promise((resolve, reject) => {
	console.log("Listening events");
	contract.LogWithdraw(null, {fromBlock: 6722292, toBlock: 'latest'})
	    .get((error, result) => {
		console.log({error, result});
		if (error) { return resolve(error); }
		return resolve(result);
	    });
    });
}
