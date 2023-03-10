// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Objects {
    struct TransferStruct {
        string name;
        string location;
        string date;
        string details;
        address recipient;
    }

    mapping(uint => mapping(address => TransferStruct)) public lookup;

    //TransferStruct[] transactions;

    function sendPayment(uint _hash, string memory _name, string memory _location, string memory _date, string memory _details, address payable _recipient) payable public {
        (bool sent, bytes memory data) = _recipient.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        // update the values
        lookup[_hash][msg.sender] = TransferStruct(_name, _location, _date, _details, _recipient);
    }

    function getAllPayments(uint _hash) public view returns (TransferStruct memory) {
        return lookup[_hash][msg.sender];
    }
}