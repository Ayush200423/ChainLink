const fs = require('fs')
const Web3 = require('web3');

const web3 = new Web3('HTTP://127.0.0.1:7545'); // URL to connect to the main ethereum block chain

const serviceProvider = '0x744b46272C101e89F46E6c0Da48740b00d6f6351'; // Farm
const serviceReceiver = '0xcC3B815251e3d7e315ABC41868B1758499a929DA'; // Distributor

deployContract()

async function compileContract() {
    /*
        Run this in command line to generate the abi and bytecode .bin files

        node_modules/.bin/solcjs --bin --abi './contracts/<contract-name>.sol'
    */
}

function deployContract() {
    const abi = JSON.parse(fs.readFileSync('contracts_Details_sol_Details.abi'));
    const bytecode = fs.readFileSync('contracts_Details_sol_Details.bin').toString();

    const contract = new web3.eth.Contract(abi, {
        from: serviceProvider, 
        gasPrice: 22000000000,
        gas: 1500000,
        data: bytecode
    });

    contract.deploy().send().then(deployedContract => {
        contract.options.address = deployedContract.options.address; 

        contract.methods.sendPayment(
            47832910473217,
            "Farm",
            "Alabama",
            "January 16, 2022",
            "Red Apple",
            serviceProvider
        ).call(console.log);
    })

    return contract
}