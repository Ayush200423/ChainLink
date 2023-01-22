// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Details {
    uint public hash;
    string public name;
    string public location;
    string public date;
    string public description;
    address public sender;
    address payable public recipient;

    function sendPayment(uint _hash, string memory _name, string memory _location, string memory _date, string memory _description, address payable _recipient) payable public {
        (bool sent, bytes memory data) = _recipient.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        // update the values
        hash = _hash;
        name = _name;
        location = _location;
        date = _date;
        description = _description;
        recipient = _recipient;
    }

    constructor() {
        hash = 0;
        name = "";
        location = "";
        date = "";
        description = "";
        sender = msg.sender;
        recipient = payable(msg.sender);
    }
}