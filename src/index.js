// functions for deploying airdrop
import { deployContract } from './deployContract';
import { approveContract } from './approveContract';
import { generateLinks } from './generateLinks';

// functions for claiming tokens
import { getAirdropParams, isLinkClaimed } from './getAirdropParams';
import { claimTokens } from './claimTokens';


// library api
export default {
    deployContract,
    approveContract,
    generateLinks,
    getAirdropParams,
    isLinkClaimed,
    claimTokens
}

