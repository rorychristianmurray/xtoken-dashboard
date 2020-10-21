require('dotenv').config()
const Web3 = require('web3')
const client = require('node-rest-client-promise').Client()
const INFURA_KEY = process.env.INFURA_KEY
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY
// const web3 = new Web3(`wss://mainnet.infura.io/ws/v3/${INFURA_KEY}`)
const XSNX_CORE_ADDRESS = process.env.XSNX_CORE_ADDRESS
// const etherscan_url = `http://api.etherscan.io/api?module=contract&action=getabi&address=${XSNX_CORE_ADDRESS}&apikey=${ETHERSCAN_KEY}`

console.log("process.env : ", process.env)

const etherscan_url = 'http://api.etherscan.io/api?module=contract&action=getabi&address=0x2934443c1749dCC0cDcabbD77098EEa31D2ea6c3&apikey=4UJT4UYUFSWGS9KB4PGKJIS66AHSUJ12YR'

exports.getContractAbi = async () => {
  const etherscan_response = await client.getPromise(etherscan_url)
  // const CONTRACT_ABI = JSON.parse(etherscan_response.data.result)
  // return CONTRACT_ABI
}

// console.log("getContractAbi : ", this.getContractAbi())
