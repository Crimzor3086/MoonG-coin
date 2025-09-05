// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MoonG is ERC20 {
    constructor(uint256 initialSupply) ERC20("MoonG", "MOONG") {
        _mint(msg.sender, initialSupply);
    }
}





























