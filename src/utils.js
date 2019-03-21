import Promise from 'bluebird';
const Wallet = require('ethereumjs-wallet');
const Web3Utils = require('web3-utils');
const util = require("ethereumjs-util");
import { NFT_ABI, ERC20_ABI } from './metadata'; 
const SIGNATURE_PREFIX = "\x19Ethereum Signed Message:\n32";


/**
 * @desc Get token object from the contract address.
 * @param  {String}  [tokenAddress] - token contract address
 * @param  {Object}  [web3] - web3 object (from web3.js lib)
 * @return {Object}
 */
export const getToken = (tokenAddress, web3) => {    
    const instance = web3.eth.contract(ERC20_ABI).at(tokenAddress);
    Promise.promisifyAll(instance, { suffix: 'Promise' });
    return instance;
};


/**
 * @desc Get token object from the contract address.
 * @param  {String}  [tokenAddress] - token contract address
 * @param  {Object}  [web3] - web3 object (from web3.js lib)
 * @return {Object}
 */
export const getTokenNFT = (tokenAddress, web3) => {    
    const instance = web3.eth.contract(NFT_ABI).at(tokenAddress);
    Promise.promisifyAll(instance, { suffix: 'Promise' });
    return instance;
};


/**
 * @desc Generate Ethereum Account
 * @return {'address': String, 'privateKey': String} 
 */
export const generateAccount = () => {
    const wallet = Wallet.generate();
    const address = wallet.getChecksumAddressString();
    const privateKey = wallet.getPrivateKey();
    return { address, privateKey };
}


/**
 * @desc Get Ethereum address from private key.
 * @param  {String}  [privateKey]
 * @return {String} 
 */
export const getAddressFromPrivateKey = (privateKey) => {
    return '0x' + Wallet.fromPrivateKey(
        new Buffer(privateKey, 'hex')).getAddress().toString('hex');
}


/**
 * @desc Sign message hash with private key.
 * @param  {String}  [privateKey]
 * @param  {String}  [msg] - message hash
 * @return {'v': Number, 'r': String, 's': String} 
 */
const _signWithPK = (privateKey, msg) => {
    return util.ecsign(new Buffer(util.stripHexPrefix(msg), 'hex'), new Buffer(privateKey, 'hex'));
}


/**
 * @desc Sign Ethereum address with private key.
 * @param  {String}  [privateKey]
 * @param  {String}  [address] - Ethereum address
 * @return {'v': Number, 'r': String, 's': String} 
 */
export const signAddress = ({address, privateKey}) => {
    const verificationHash = Web3Utils.soliditySha3(SIGNATURE_PREFIX, { type: 'address', value: address });  
    const signature = _signWithPK(privateKey, verificationHash);
    const v = signature.v;
    const r = '0x' + signature.r.toString("hex");
    const s = '0x' + signature.s.toString("hex");
    return { v, r, s };
}


/**
 * @desc Sign Ethereum address with private key.
 * @param  {String}  [privateKey]
 * @param  {String}  [address] - Ethereum address
 * @return {'v': Number, 'r': String, 's': String} 
 */
export const sign2Addresses = ({address, referralAddress, privateKey}) => {
    const verificationHash = Web3Utils.soliditySha3(SIGNATURE_PREFIX, { type: 'address', value: address }, { type: 'address', value: referralAddress });  
    const signature = _signWithPK(privateKey, verificationHash);
    const v = signature.v;
    const r = '0x' + signature.r.toString("hex");
    const s = '0x' + signature.s.toString("hex");
    return { v, r, s };
}
