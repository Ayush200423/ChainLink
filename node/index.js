const fs = require('fs')
const Web3 = require('web3');

const web3 = new Web3('HTTP://127.0.0.1:7545'); // URL to connect to the main ethereum block chain

const serviceProvider = '0x744b46272C101e89F46E6c0Da48740b00d6f6351'; // Farm
const serviceReceiver = '0xcC3B815251e3d7e315ABC41868B1758499a929DA'; // Distributor

deployContract()


async function getBalances() {
    const farmBalance = await web3.eth.getBalance(serviceProvider)
    const distBalance = await web3.eth.getBalance(serviceReceiver)
    
    console.log({farmBalance})
    console.log({distBalance})
}

async function compileContract() {
    /*
        Run this in command line to generate the abi and bytecode .bin files

        node_modules/.bin/solcjs --bin --abi './contracts/<contract-name>.sol'
    */
}

function deployContract() {
    const abi = JSON.parse(fs.readFileSync('contracts_TruffleTutorial_sol_TruffleTutorial.abi'));
    const bytecode = fs.readFileSync('contracts_TruffleTutorial_sol_TruffleTutorial.bin').toString();

    const contract = new web3.eth.Contract(abi, {
        from: serviceProvider, 
        gasPrice: 22000000000,
        gas: 1500000,
        data: bytecode
    });

    contract.deploy().send().then(deployedContract => {
        contract.options.address = deployedContract.options.address; 

        contract.methods.message().call(console.log);
    })

    return contract
}