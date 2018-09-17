import { generateAccount, sign2Addresses } from './utils';
const HOST = 'https://eth2air.io';


/**
 * @desc Construct a claim link.
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {String}  [airdropTransitPK] - Transit Private key from the URL params
 * @param  {String}  [host] - Claim Link's server host, e.g. 'https://eth2air.io'  
 * @return {String}
 */
const _constructLink = ({ airdropTransitPK, contractAddress, host, referralAddress }) => {

    // generate random key pair
    const { address, privateKey } = generateAccount();
    
    // sign private key with the Airdrop Transit Private Key
    const { v, r, s } = sign2Addresses({address, referralAddress, privateKey: airdropTransitPK});

    // construct link
    // construct link
    let link = `${host}/#/r?v=${v}&r=${r}&s=${s}&pk=${privateKey.toString('hex')}&c=${contractAddress}`;
    if (referralAddress !== '0x0000000000000000000000000000000000000000') {
	link = `${link}&ref=${referralAddress}`;
    }
    
    return link;
}


/**
 * @desc Generate array of claim links.
 * @param  {Number}  [linksNumber] - Number of links to generate
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {String}  [airdropTransitPK] - Transit Private key from the URL params
 * @param  {String}  [host] - Claim Link's server host, e.g. 'https://eth2air.io' 
 * @return {Array}
 */
export const generateLinks = ({linksNumber, airdropTransitPK, contractAddress, host=HOST, referralAddress='0x0000000000000000000000000000000000000000'}) => {
    let i = 0;    
    const links = [];
    while (i < linksNumber) {     
        const link = _constructLink({airdropTransitPK, contractAddress, host, referralAddress});
        links.push([link]);
        i++;
    }
    return links;
}
