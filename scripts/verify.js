const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const address = process.env.CONTRACT_ADDRESS;
  if (!address) {
    throw new Error("CONTRACT_ADDRESS env var not set");
  }

  const supplyStr = process.env.INITIAL_SUPPLY || "1000000000"; // tokens (not wei)
  const initialSupply = hre.ethers.parseUnits(supplyStr, 18);

  await hre.run("verify:verify", {
    address,
    constructorArguments: [initialSupply]
  });

  console.log("Verification submitted for", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
