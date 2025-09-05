const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const [deployer, user] = await ethers.getSigners();
  const contractAddress = process.env.CONTRACT_ADDRESS;
  if (!contractAddress) {
    throw new Error("CONTRACT_ADDRESS env var not set");
  }

  const moong = await ethers.getContractAt("MoonG", contractAddress);

  console.log("Deployer:", deployer.address);
  console.log("Deployer balance:", (await moong.balanceOf(deployer.address)).toString());

  const tx = await moong.transfer(user.address, ethers.parseUnits("100", 18));
  await tx.wait();

  console.log("Transferred 100 MOONG to", user.address);
  console.log("User balance:", (await moong.balanceOf(user.address)).toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
