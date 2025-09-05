# MoonG Coin (MOONG)

ERC-20 token on 0G networks using Hardhat + OpenZeppelin.

## Prerequisites

- Node.js 18+ and npm
- A funded deployer wallet private key (for 0G Testnet/Mainnet)

## Install

```
npm install
```

## Networks

- 0gTestnet: `https://evmrpc-testnet.0g.ai` (chainId `16601`, explorer `https://chainscan-galileo.0g.ai`)
- 0gMainnet: `https://rpc.0g.ai` (chainId `10000`)

Configured in `config/Networks.json` and used by `hardhat.config.js`.

## Environment (.env)

```
PRIVATE_KEY=0xYOUR_PRIVATE_KEY
CONTRACT_ADDRESS=0x... # set after deploy
INITIAL_SUPPLY=1000000000 # whole tokens, used by verify
```

Notes:
- The contract constructor expects the initial supply in smallest units. The deploy script already passes `ethers.parseUnits("1000000000", 18)` so you do not multiply by decimals inside the contract.
- `CONTRACT_ADDRESS` is used by `interact.js`, `verify.js`, and the browser UI (optional query param also supported).

## Compile

```
npx hardhat compile
```

## Test

```
npx hardhat test
```

## Deploy

```
# Testnet
npx hardhat run scripts/deploy.js --network 0gTestnet

# Mainnet (be careful)
npx hardhat run scripts/deploy.js --network 0gMainnet
```

After deploy, copy the printed address into `.env` as `CONTRACT_ADDRESS`.

## Interact (Node script)

```
npx hardhat run scripts/interact.js --network 0gTestnet
```

This will show your balance and transfer 100 MOONG to a second signer.

## Verify on 0G

```
npx hardhat run scripts/verify.js --network 0gTestnet
```

Requires `CONTRACT_ADDRESS` and `INITIAL_SUPPLY` in `.env`.

## Web UI (index.html)

Serve locally and open in a browser with a wallet (MetaMask):

```
npm run dev
```

Then open `http://127.0.0.1:5173`.

In the UI:
- Paste your deployed contract address and click Save
- Click Connect Wallet and ensure your wallet is on chainId 9000/10000
- View your balance and send transfers
- Optional: prefill via `index.html?address=0xYourContract`

## Troubleshooting

- Solidity import not found (`@openzeppelin/...`): run `npm install`.
- Wrong chain in UI: switch your wallet to 0G Testnet/Mainnet.
- Port 5173 already in use:
  - `npm run dev -- -p 5174`, or
  - `lsof -i :5173 -t | xargs -r kill -9`
- Verify failures: double-check `CONTRACT_ADDRESS`, `INITIAL_SUPPLY`, and that the constructor argument matches the deploy script’s `parseUnits` value.
