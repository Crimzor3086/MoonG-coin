const { ethers } = require("hardhat");

async function main() {
  const initialSupply = ethers.parseUnits("1000000000", 18); // 1B MOONG
  const MoonG = await ethers.getContractFactory("MoonG");
  const moong = await MoonG.deploy(initialSupply);

  await moong.waitForDeployment();
  console.log("MoonG deployed to:", await moong.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
