import { generateAccount, signAddress } from './utils';
const HOST = 'https://eth2air.io';


/**
 * @desc Construct a claim link.
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {String}  [airdropTransitPK] - Transit Private key from the URL params
 * @return {String}
 */
const _constructLink = ({ airdropTransitPK, contractAddress }) => {

    // generate random key pair
    const { address, privateKey } = generateAccount();
    
    // sign private key with the Airdrop Transit Private Key
    const { v, r, s } = signAddress({address, privateKey: airdropTransitPK});

    // construct link
    let link = `${HOST}/#/r?v=${v}&r=${r}&s=${s}&pk=${privateKey.toString('hex')}&c=${contractAddress}`;
    return link;
}


/**
 * @desc Generate array of claim links.
 * @param  {Number}  [linksNumber] - Number of links to generate
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {String}  [airdropTransitPK] - Transit Private key from the URL params
 * @return {Array}
 */
export const generateLinks = ({linksNumber, airdropTransitPK, contractAddress}) => {
    let i = 0;    
    const links = [];
    while (i < linksNumber) {	    
	const link = _constructLink({airdropTransitPK, contractAddress});
	links.push([link]);
	i++;
    }
    return links;
}
