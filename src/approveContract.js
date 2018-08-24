import Promise from 'bluebird';
import { getToken } from './utils';

/**
 * @desc Approve Smart Contract to Withdraw Token on Sender's behalf.
 * @param  {String}  [tokenAddress] - Token contract address
 * @param  {String}  [contractAddress] - Airdrop contract address
 * @param  {Number}  [amount] - Amount of wei to approve
 * @param  {Object}  [web3] - web3 object (from web3.js lib)
 * @return {Promise} 
 */
export const approveContract = ({ tokenAddress, contractAddress, amount, web3 }) => {
    const token = getToken(tokenAddress, web3);    
    return token.approvePromise(contractAddress, amount, { from: web3.eth.accounts[0] });
}
