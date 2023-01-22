const fs = require('fs')
const path = require('path')
const solc = require('solc')

var input = {
  language: 'Solidity',
  sources: {
    'TruffleTutorial': {
      content: 'contract TT { function f() public { } }'
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));



const abi = output.contracts['TruffleTutorial']['TT'].abi

console.log(output.contracts['TruffleTutorial']['TT'])