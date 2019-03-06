import Promise from 'bluebird';
import { getToken, getTokenNFT, getAddressFromPrivateKey } from './utils';
import { LINKDROP_NFT_ABI } from './metadata'; 

/**
 * @desc Get Airdrop parameters from the Airdrop Smart Contract
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {Object}  [web3] - web3 object (from web3.js lib)
 * @return {Object}
 */
export const getLinkdropParamsNFT = async ({contractAddress, web3 }) => { 
    // get contract object at contractAddress
    const contract = web3.eth.contract(LINKDROP_NFT_ABI).at(contractAddress);
    Promise.promisifyAll(contract, { suffix: '_Promise' });

    // get token address form the linkdrop contract
    const tokenAddress = await contract.NFT_ADDRESS_Promise();
    console.log({tokenAddress});

    // for tokens
    // get token object at token address
    const token = getToken(tokenAddress, web3);
   
    let [
	tokenSymbol,
	isPaused,
	isStopped
    ] = await Promise.all([	    
	token.symbolPromise(),
	contract.paused_Promise(),
	contract.stopped_Promise()
    ]);
   
    
    return {
        tokenSymbol,
        tokenAddress,
	isPaused,
	isStopped
    };
}


/**
 * @desc Get Linkdrop (NFT) token address
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {Object}  [web3] - web3 object (from web3.js lib)
 * @return {String}
 */
export const getLinkdropNFTAddress = async ({contractAddress, web3 }) => { 
    // get contract object at contractAddress
    const contract = web3.eth.contract(LINKDROP_NFT_ABI).at(contractAddress);
    Promise.promisifyAll(contract, { suffix: '_Promise' });

    // get token address form the linkdrop contract
    const tokenAddress = await contract.NFT_ADDRESS_Promise();

    return tokenAddress;
}


export const getNFTMetadata = async ({id, tokenAddress, web3}) => {
    // default metadata
    let metadata;
    let defaultMeta = {
	description: "",
	name: `NFT #${id}`,
	externalUrl: '',
	image:
	"https://raw.githubusercontent.com/VolcaTech/eth2-assets/master/images/default_token.png"
    };

    // fetch token URI if it wasn't fetched
    const token = getTokenNFT(tokenAddress, web3);
    const tokenURI = await token.tokenURIPromise(id);

    
    // if there is tokenURI, get metadata from URI
    if (tokenURI) {
	try {
	    metadata = await fetch(tokenURI).then(res => res.json());
	} catch (err) {
	    console.log(err);
	}
    }

    return metadata || defaultMeta;
}
