# Volcà Core Javascript Library

Library for deploying and interacting with Volcà Airdrop Contract and Server APIs.  
Used at Volca-Airdrop-App - https://github.com/VolcaTech/volca-airdrop-app 

## Installation
```bash
npm i --save https://github.com/VolcaTech/volca-airdrop-core
```
## Usage

### Get Airdrop Details from the Airdrop Smart Contract
```js
// import library
import eth2air from 'eth2air-core';


eth2air.getAirdropParams({
		contractAddress: contractAddress, // airdrop contract address from the claim URL
		transitPK: transitPK, // transit private key from the claim URL
		web3: web3 // web3 object (see web3js)
}).then({
		tokenSymbol, 
		claimAmount, // in atomic values
		tokenAddress, 
		linkClaimed // if the link was already used
	    } => { 
      // ....
})
```


### Claim link
```js
import eth2air from 'eth2air-core';

eth2air.claimTokens({
	    receiverAddress, // address to receive tokens to
	    contractAddress, // address of the airdrop contract from he
	    transitPK,  // transit private key from the claim URL
	    keyR,  // signature param (r) from the claim URL
	    keyS,  // signature param (s) from the claim URL
	    keyV,  // signature param (v) from the claim URL
	    networkId // id of the connected Network (Mainnet - '1', Ropsten - '3') 
	}).then((result) => { 
      if (!result.success) {
	      throw new Error(result.errorMessage || "Server error");
	    }
     
	  // Server returns Hash of the transaction submitted by the Server to the Airdrop Contract
	  const { txHash } = result;
  })
  ```
### Deploy Airdrop Contract and Generate Claim Links
```js
const _deployAirdrop = async  () => {
    // 1. Deploy Smart Contract                                                                                                                                                      
    // generate airdropTransit key pair for signing links and deploy airdrop contract                                                                                                
    let contractAddress = null;
    const {
        txHash,
        airdropTransitPK,
        airdropTransitAddress
    } = await eth2air.deployContract({
        claimAmount, //  claim amount of token (e.g. 24.56)                                                                                                                          
        tokenAddress,
        decimals, // token decimals                                                                                                                                                  
        claimAmountEth, // claim amount of ETH (e.g. 0.001)                                                                                                                          
        linksNumber, // number of links to generate                                                                                                                                  
        web3, // web3 object                                                                                                                                                         
        onTxMined: (airdropContractAddress) => {
            // callback to update airdropContractAddress, when mined                                                                                                                 
            contractAddress = airdropContractAddress;
        }
    });

    // Wait until contract is deployed...                                                                                                                                            

    // 2. Approve Smart Contract for Token Withdrawal                                                                                                                                
    eth2air.approveContract({
        tokenAddress,
        contractAddress,
        amount: 10e30, //  amount to approve                                                                                                                                         
        web3 // web3 object                                                                                                                                                          
    });

    // 3. Generate Claim Links                                                                                                                                                       
    const links = eth2air.generateLinks({
        linksNumber, // number of links to generate                                                                                                                                  
        airdropTransitPK, // airdrop transit private key                                                                                                                             
        contractAddress
    });
}    
```
