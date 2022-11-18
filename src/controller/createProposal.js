const { ethers } = require('ethers');

require('dotenv').config();

const { PRIVATE_KEY, RPC_URL } = process.env;

// ABIs import
// const {
//   LangDAO_ABI,
//   ControllerABI,
//   BadgeAddress,
//   LangDAOAddress,
//   ControllerAddress,
// } = '../utils/config/constant.js';
// const ControllerABI = '../utils/config/constant.js';

// Deployed contract address
// const BadgeAddress = '../utils/config/constant.js';
// const LangDAOAddress = '../utils/config/constant.js';
// const ControllerAddress = '../utils/config/constant.js';
let LangDAO_ABI = [
  {
    inputs: [
      {
        internalType: 'contract Badge',
        name: '_badge',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_proposer',
        type: 'address',
      },
    ],
    name: 'canPropose',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_voter',
        type: 'address',
      },
    ],
    name: 'canVote',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_proposer',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_description',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_lang',
        type: 'string',
      },
    ],
    name: 'createProposal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_forId',
        type: 'uint256',
      },
    ],
    name: 'isAlreadyVoted',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
    ],
    name: 'markComplete',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum LangDAO.VoteType',
        name: '_vote',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: '_forId',
        type: 'uint256',
      },
    ],
    name: 'voteProposal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const providerRPC = {
  moonbeam: {
    name: 'mumbai',
    rpc: RPC_URL,
    chainId: 80001, // 0x504 in hex,
  },
};
// 3. Create ethers provider
const provider = new ethers.providers.StaticJsonRpcProvider(
  providerRPC.moonbeam.rpc,
  {
    chainId: providerRPC.moonbeam.chainId,
    name: providerRPC.moonbeam.name,
  }
);

// let privateKey = PRIVATE_KEY;
let signer = new ethers.Wallet(PRIVATE_KEY, provider);

let contract = new ethers.Contract(
  '0xc2E355BcF699c124C540B61807921d8d759aF8A7',
  LangDAO_ABI,
  signer
);

// const signer = provider.getSigner();

async function createProposal() {
  // Create proposal
  let currentValue = await contract.createProposal(
    '0xb41b7589AE02A4594cd9314f6b500B387027250b',
    'Demo',
    'Description',
    'Solidity'
  );

  console.log(currentValue);
}
createProposal();

// Vote Proposal
async function voteProposal() {
  // Execute balanceOf() to retrieve the token balance
  let currentValue = await contract.voteProposal(1, 1);

  console.log(currentValue);
}
// voteProposal();
