import Promise from 'bluebird';
import { NFT_ABI } from './metadata';

export const getNFT = (tokenAddress, web3) => {    
    const instance = web3.eth.contract(NFT_ABI).at(tokenAddress);
    Promise.promisifyAll(instance, { suffix: 'Promise' });
    return instance;
};


export const approveNFTLinkdropContract = ({ tokenAddress, contractAddress, web3 }) => {
    const token = getNFT(tokenAddress, web3);    
    return token.setApprovalForAllPromise(contractAddress, true, { from: web3.eth.accounts[0] });
}
