// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract NexusRoyalty {
    mapping(string => uint256) public trackRoyalties;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function distribute(string memory trackId, uint256 amount) external {
        require(msg.sender == owner, "Only owner");
        trackRoyalties[trackId] += amount;
    }

    function claim(string memory trackId) external {
        uint256 amount = trackRoyalties[trackId];
        trackRoyalties[trackId] = 0;
        payable(msg.sender).transfer(amount);
    }
} 
