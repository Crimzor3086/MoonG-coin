const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MoonG", function () {
  it("Should deploy with correct supply", async function () {
    const [owner] = await ethers.getSigners();
    const initialSupply = ethers.parseUnits("1000000000", 18); // 1B MOONG

    const MoonG = await ethers.getContractFactory("MoonG");
    const moong = await MoonG.deploy(initialSupply);
    await moong.waitForDeployment();

    const balance = await moong.balanceOf(owner.address);
    expect(balance).to.equal(initialSupply);
  });

  it("Should allow transfers", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const MoonG = await ethers.getContractFactory("MoonG");
    const moong = await MoonG.deploy(ethers.parseUnits("1000000000", 18));
    await moong.waitForDeployment();

    await moong.transfer(addr1.address, ethers.parseUnits("100", 18));
    const addr1Balance = await moong.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(ethers.parseUnits("100", 18));
  });
});
