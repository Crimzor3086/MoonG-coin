# MoonG Coin (MOONG)

ERC-20 meme coin on 0G networks using Hardhat and OpenZeppelin.

## Setup

1. Install Node 18+.
2. Install deps: `npm install`
3. Create `.env`:

```
PRIVATE_KEY=0x...
CONTRACT_ADDRESS= # fill after deploy
INITIAL_SUPPLY=1000000000
```

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
npx hardhat run scripts/deploy.js --network 0gTestnet
```

Copy the printed address into `.env` as `CONTRACT_ADDRESS`.

## Interact

```
npx hardhat run scripts/interact.js --network 0gTestnet
```

## Verify

```
npx hardhat run scripts/verify.js --network 0gTestnet
```

Ensure `CONTRACT_ADDRESS` and `INITIAL_SUPPLY` are set in `.env`.
