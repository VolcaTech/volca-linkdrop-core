// functions for deploying airdrop
import { deployContract } from './deployContract';
import { approveContract } from './approveContract';
import { generateLinks } from './generateLinks';

// functions for deploying NFT linkdrop
import { deployNFTLinkdropContract } from './deployNFTLinkdropContract';
import { approveNFTLinkdropContract } from './approveNFTLinkdropContract';

// functions for claiming tokens
import { getAirdropParams, isLinkClaimed } from './getAirdropParams';
import { getLinkdropParamsNFT } from './getLinkdropNFTParams';
import { claimTokens, claimNFT } from './claimTokens';
import { getWithdrawalEvents, subscribeForWithdrawalEventsNFT, getWithdrawalEventsNFT } from './events';


// library api
export default {
    deployContract,
    approveContract,
    generateLinks,
    getAirdropParams,
    isLinkClaimed,
    claimTokens,
    claimNFT,
    deployNFTLinkdropContract,
    approveNFTLinkdropContract,
    getWithdrawalEvents,
    getWithdrawalEventsNFT,
    subscribeForWithdrawalEventsNFT,
    getLinkdropParamsNFT
}

