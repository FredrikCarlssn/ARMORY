export const SKILLS_CONTRACT = "0x42DF3C5E15Aa2cb0d0A61ED327DDF6278363322c";
export const ITEMS_CONTRACT = "0x0ca51CBfF2E2dCE8a08B66fc40cCD38AD82b62FB";
export const ITEMS_CONTRACT2 = "0x47C74BbD0c74D57e4e443c86442EF49E2a0969A1";
export const TOKEN_CONTRACT = "0x4cCd9a613A9CfB84F9c771Da7cad56F907cc357f";

export const MAGNUS_ADDRESS = "0x5cb12491E161174D6E6ae4515f6354eB55dE1F3E";
export const NILS_ADDRESS = "0x7b3B6753CC640D045f5b299FB98B28Cd9c1ceB68";

export const ipfsLink = (image) => {
  image = image.replace("ipfs://", "https://ipfs.io/ipfs/");
  return image;
};
export const traitKeysItems = [
  "0x3100000000000000000000000000000000000000000000000000000000000000",
  "0x3200000000000000000000000000000000000000000000000000000000000000",
  "0x3300000000000000000000000000000000000000000000000000000000000000",
  "0x3400000000000000000000000000000000000000000000000000000000000000",
  "0x3500000000000000000000000000000000000000000000000000000000000000",
  "0x3600000000000000000000000000000000000000000000000000000000000000",
  "0x3700000000000000000000000000000000000000000000000000000000000000",
  "0x3800000000000000000000000000000000000000000000000000000000000000",
  "0x3900000000000000000000000000000000000000000000000000000000000000",
  "0x3130000000000000000000000000000000000000000000000000000000000000",
  "0x3131000000000000000000000000000000000000000000000000000000000000",
  "0x3132000000000000000000000000000000000000000000000000000000000000",
  "0x3133000000000000000000000000000000000000000000000000000000000000",
  "0x3134000000000000000000000000000000000000000000000000000000000000",
  "0x3135000000000000000000000000000000000000000000000000000000000000",
  "0x3136000000000000000000000000000000000000000000000000000000000000",
  "0x3137000000000000000000000000000000000000000000000000000000000000",
  "0x3138000000000000000000000000000000000000000000000000000000000000",
  "0x3139000000000000000000000000000000000000000000000000000000000000",
  "0x3230000000000000000000000000000000000000000000000000000000000000",
  "0x3231000000000000000000000000000000000000000000000000000000000000",
  "0x3232000000000000000000000000000000000000000000000000000000000000",
];

export const traitKeysSkills = [
  "0x3100000000000000000000000000000000000000000000000000000000000000",
  "0x3200000000000000000000000000000000000000000000000000000000000000",
  "0x3300000000000000000000000000000000000000000000000000000000000000",
  "0x3400000000000000000000000000000000000000000000000000000000000000",
  "0x3500000000000000000000000000000000000000000000000000000000000000",
  "0x3600000000000000000000000000000000000000000000000000000000000000",
  "0x3700000000000000000000000000000000000000000000000000000000000000",
  "0x3800000000000000000000000000000000000000000000000000000000000000",
  "0x3900000000000000000000000000000000000000000000000000000000000000",
  "0x3130000000000000000000000000000000000000000000000000000000000000",
  "0x3131000000000000000000000000000000000000000000000000000000000000",
  "0x3132000000000000000000000000000000000000000000000000000000000000",
  "0x3133000000000000000000000000000000000000000000000000000000000000",
  "0x3134000000000000000000000000000000000000000000000000000000000000",
  "0x3135000000000000000000000000000000000000000000000000000000000000",
  "0x3136000000000000000000000000000000000000000000000000000000000000",
  "0x3137000000000000000000000000000000000000000000000000000000000000",
  "0x3138000000000000000000000000000000000000000000000000000000000000",
  "0x3139000000000000000000000000000000000000000000000000000000000000",
  "0x3230000000000000000000000000000000000000000000000000000000000000",
];

export const ITEMS_TRAIT_VALUES = [
  "Rarity",
  "Quality",
  "Damage Type",
  "Damage Range",
  "Attack Speed",
  "Range",
  "Defense",
  "Max Durability",
  "Mod Slot 1",
  "Mod Slot 2",
  "Mod Slot 3",
  "Mod Slot 4",
  "Mod Slot 5",
  "Mod Slot 6",
  "Mod Slot 7",
  "Mod Slot 8",
  "Mod Slot 9",
  "Mod Slot 10",
  "Mod Slot 11",
  "Mod Slot 12",
  "Mod Slot 13",
  "Mod Slot 14",
];

export const SKILLS_TRAIT_VALUES = [
  "Skill Level",
  "Damage Range",
  "Cooldown",
  "Range",
  "AoE Radius",
  "Max Charges",
  "Resource Cost",
  "Duration",
  "Projectile Speed",
  "Mod Slot 1",
  "Mod Slot 2",
  "Mod Slot 3",
  "Mod Slot 4",
  "Mod Slot 5",
  "Mod Slot 6",
  "Mod Slot 7",
  "Mod Slot 8",
  "Mod Slot 9",
  "Mod Slot 10",
  "Mod Slot 11",
];

export const traitTypes = [
  { traitKey: "Damage range", traitValue: "" },
  { traitKey: "Attack speed", traitValue: "" },
  { traitKey: "Range", traitValue: "" },
  { traitKey: "Defense", traitValue: "" },
  { traitKey: "Max durability", traitValue: "" },
];

export const ABI_ITEMS = [
  {
    type: "constructor",
    inputs: [
      { name: "defaultAdmin", type: "address", internalType: "address" },
      { name: "minter", type: "address", internalType: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MINTER_ROLE",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "burn",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getApproved",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleAdmin",
    inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "grantRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "account", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hasRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "account", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "operator", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "callerConfirmation", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "account", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeMint",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "uri", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "approved", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenByIndex",
    inputs: [{ name: "index", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenOfOwnerByIndex",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "index", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      { name: "approved", type: "bool", indexed: false, internalType: "bool" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BatchMetadataUpdate",
    inputs: [
      {
        name: "_fromTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_toTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MetadataUpdate",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleAdminChanged",
    inputs: [
      { name: "role", type: "bytes32", indexed: true, internalType: "bytes32" },
      {
        name: "previousAdminRole",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "newAdminRole",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      { name: "role", type: "bytes32", indexed: true, internalType: "bytes32" },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      { name: "role", type: "bytes32", indexed: true, internalType: "bytes32" },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "AccessControlBadConfirmation", inputs: [] },
  {
    type: "error",
    name: "AccessControlUnauthorizedAccount",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      { name: "neededRole", type: "bytes32", internalType: "bytes32" },
    ],
  },
  { type: "error", name: "ERC721EnumerableForbiddenBatchMint", inputs: [] },
  {
    type: "error",
    name: "ERC721IncorrectOwner",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "owner", type: "address", internalType: "address" },
    ],
  },
  {
    type: "error",
    name: "ERC721InsufficientApproval",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidOperator",
    inputs: [{ name: "operator", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721NonexistentToken",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
  },
  {
    type: "error",
    name: "ERC721OutOfBoundsIndex",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "index", type: "uint256", internalType: "uint256" },
    ],
  },
];
