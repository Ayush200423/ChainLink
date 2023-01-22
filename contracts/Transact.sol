// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transact {

    struct TransferStruct {
        uint hash;
        string name;
        string location;
        string date;
        string details;
        address sender;
        address recipient;
    }

    TransferStruct[] transactions;

    function sendPayment(uint _hash, string memory _name, string memory _location, string memory _date, string memory _details, address payable _recipient) payable public {
        (bool sent, bytes memory data) = _recipient.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        // update the values
        transactions.push(TransferStruct(_hash, _name, _location, _date, _details, msg.sender, _recipient)); 
    }

    function getAllPayments() public view returns (TransferStruct[] memory) {
        return transactions;
    }
}