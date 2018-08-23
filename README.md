# Eth2Airdrop Core Javascript Library

Library for deploying and interacting with Eth2Airdrop Contract and Server APIs.  
Used at Eth2Airdrop-app - https://github.com/Eth2io/eth2airdrop-app.git  

## Installation
```bash
npm i --save https://github.com/Eth2io/eth2airdrop-core.git
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
	    networkId // id of the connected Network (Mainnet - 1, Ropsten - 3) 
	}).then((result) => { 
      if (!result.success) {
	      throw new Error(result.errorMessage || "Server error");
	    }
     
	  // Server returns Hash of the transaction submitted by the Server to the Airdrop Contract
	  const { txHash } = result;
  })
  ```
