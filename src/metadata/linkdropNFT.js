export const ABI = [
    {
	"constant": false,
	"inputs": [],
	"name": "stop",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "LINKDROP_VERIFICATION_ADDRESS",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "unpause",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "_recipient",
		"type": "address"
	    },
	    {
		"name": "_tokenId",
		"type": "uint256"
	    },
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_keyV",
		"type": "uint8"
	    },
	    {
		"name": "_keyR",
		"type": "bytes32"
	    },
	    {
		"name": "_keyS",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientV",
		"type": "uint8"
	    },
	    {
		"name": "_recipientR",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientS",
		"type": "bytes32"
	    }
	],
	"name": "withdraw",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_addressSigned",
		"type": "address"
	    },
	    {
		"name": "_tokenId",
		"type": "uint256"
	    },
	    {
		"name": "_v",
		"type": "uint8"
	    },
	    {
		"name": "_r",
		"type": "bytes32"
	    },
	    {
		"name": "_s",
		"type": "bytes32"
	    }
	],
	"name": "verifyLinkPrivateKey",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "pure",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "paused",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "stopped",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "pause",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "owner",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_recipient",
		"type": "address"
	    },
	    {
		"name": "_tokenId",
		"type": "uint256"
	    },
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_keyV",
		"type": "uint8"
	    },
	    {
		"name": "_keyR",
		"type": "bytes32"
	    },
	    {
		"name": "_keyS",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientV",
		"type": "uint8"
	    },
	    {
		"name": "_recipientR",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientS",
		"type": "bytes32"
	    }
	],
	"name": "checkWithdrawal",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "NFT_ADDRESS",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "LINKDROPPER",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_addressSigned",
		"type": "address"
	    },
	    {
		"name": "_v",
		"type": "uint8"
	    },
	    {
		"name": "_r",
		"type": "bytes32"
	    },
	    {
		"name": "_s",
		"type": "bytes32"
	    }
	],
	"name": "verifyReceiverAddress",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "pure",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_tokenId",
		"type": "uint256"
	    }
	],
	"name": "isLinkClaimed",
	"outputs": [
	    {
		"name": "claimed",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"inputs": [
	    {
		"name": "_NFTAddress",
		"type": "address"
	    },
	    {
		"name": "_linkdropVerificationAddress",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
    },
    {
	"anonymous": false,
	"inputs": [],
	"name": "Stop",
	"type": "event"
    },
    {
	"anonymous": false,
	"inputs": [],
	"name": "Pause",
	"type": "event"
    },
    {
	"anonymous": false,
	"inputs": [],
	"name": "Unpause",
	"type": "event"
    }
]


export const BYTECODE = "608060405260008060146101000a81548160ff02191690831515021790555060008060156101000a81548160ff02191690831515021790555034801561004457600080fd5b506040516040806110968339810180604052810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610f11806101856000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806307da68f5146100d557806321f1f766146100ec5780633f4ba83a146101435780634cd6bd321461015a57806351bd3eac146102315780635c975abb146102df57806375f12b211461030e5780638456cb591461033d5780638da5cb5b14610354578063a054d3ef146103ab578063b32c5c4514610482578063b43114f8146104d9578063cd26ac8314610530578063fc6ff0d4146105d4575b600080fd5b3480156100e157600080fd5b506100ea610619565b005b3480156100f857600080fd5b506101016106d9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014f57600080fd5b506101586106ff565b005b34801561016657600080fd5b50610217600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190803560ff169060200190929190803560001916906020019092919080356000191690602001909291905050506107bd565b604051808215151515815260200191505060405180910390f35b34801561023d57600080fd5b506102c5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803560ff1690602001909291908035600019169060200190929190803560001916906020019092919050505061095c565b604051808215151515815260200191505060405180910390f35b3480156102eb57600080fd5b506102f4610aa4565b604051808215151515815260200191505060405180910390f35b34801561031a57600080fd5b50610323610ab7565b604051808215151515815260200191505060405180910390f35b34801561034957600080fd5b50610352610aca565b005b34801561036057600080fd5b50610369610b8a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103b757600080fd5b50610468600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050610baf565b604051808215151515815260200191505060405180910390f35b34801561048e57600080fd5b50610497610c2f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104e557600080fd5b506104ee610c55565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561053c57600080fd5b506105ba600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050610c7b565b604051808215151515815260200191505060405180910390f35b3480156105e057600080fd5b506105ff60048036038101908080359060200190929190505050610dba565b604051808215151515815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561067457600080fd5b600060159054906101000a900460ff1615151561069057600080fd5b6001600060156101000a81548160ff0219169083151502179055507fbedf0f4abfe86d4ffad593d9607fe70e83ea706033d44d24b3b6283cf3fc4f6b60405160405180910390a1565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561075a57600080fd5b600060149054906101000a900460ff16151561077557600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600080600060149054906101000a900460ff161515156107dc57600080fd5b600060159054906101000a900460ff161515156107f857600080fd5b6108098b8b8b8b8b8b8b8b8b610baf565b151561081457600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166323b872dd600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168d8d6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b15801561093257600080fd5b505af1158015610946573d6000803e3d6000fd5b5050505060019150509998505050505050505050565b6000806000878760405180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018281526020019250505060405180910390209150600182878787604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015610a5b573d6000803e3d6000fd5b5050506020604051035190508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614925050509695505050505050565b600060149054906101000a900460ff1681565b600060159054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b2557600080fd5b600060149054906101000a900460ff16151515610b4157600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000801515610bbd8a610dba565b1515141515610bcb57600080fd5b610bfb600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16898b8a8a8a61095c565b1515610c0657600080fd5b610c13888b868686610c7b565b1515610c1e57600080fd5b600190509998505050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008660405180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140191505060405180910390209150600182878787604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015610d72573d6000803e3d6000fd5b5050506020604051035190508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16149250505095945050505050565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b158015610e8a57600080fd5b505af1158015610e9e573d6000803e3d6000fd5b505050506040513d6020811015610eb457600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614159150509190505600a165627a7a7230582059081e0b4c357d4d245d6fae369b7bfd318a4d1bdf655ca73fffb0d0fee37e5d0029";
