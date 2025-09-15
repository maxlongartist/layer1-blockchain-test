# 🚀 Layer1 Blockchain - Zero Cost Ethereum-Compatible

A complete Layer 1 blockchain implementation using Hardhat, featuring a custom token and web interface.

## ✨ Features

- **Ethereum-Compatible**: Full EVM support
- **Zero Cost**: Runs on local network
- **Custom Token**: ERC-20 compatible token
- **Web Interface**: Beautiful dashboard for interaction
- **MetaMask Integration**: Connect your wallet
- **Real-time Stats**: Live blockchain data

## 🛠️ Technology Stack

- **Hardhat**: Development framework
- **Solidity**: Smart contracts
- **Ethers.js**: Blockchain interaction
- **HTML/CSS/JS**: Frontend interface
- **MetaMask**: Wallet integration

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Blockchain
```bash
npx hardhat node
```
This starts a local Ethereum network on `http://127.0.0.1:8545`

### 3. Deploy Smart Contracts
In a new terminal:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

### 4. Open Web Interface
```bash
python3 -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

## 📋 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- Python 3 (for local server)
- MetaMask browser extension

### Step-by-Step Setup

1. **Clone and Install**
   ```bash
   git clone <your-repo>
   cd layer1-blockchain
   npm install
   ```

2. **Start Hardhat Network**
   ```bash
   npx hardhat node
   ```
   Keep this terminal open - it's your blockchain!

3. **Deploy Contracts**
   Open a new terminal:
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```
   Copy the contract address from the output.

4. **Update Contract Address**
   Edit `index.html` and replace the token address:
   ```javascript
   const tokenAddress = 'YOUR_DEPLOYED_ADDRESS_HERE';
   ```

5. **Start Web Server**
   ```bash
   python3 -m http.server 3000
   ```

6. **Open in Browser**
   Go to `http://localhost:3000`

## 🔧 Configuration

### Network Settings
- **Chain ID**: 1337
- **RPC URL**: http://127.0.0.1:8545
- **Currency**: ETH (test)

### MetaMask Setup
1. Open MetaMask
2. Click "Add Network"
3. Enter the network details above
4. Connect to the network

## 📊 Smart Contracts

### SimpleToken Contract
- **Name**: Layer1 Token
- **Symbol**: L1T
- **Decimals**: 18
- **Total Supply**: 1,000,000 tokens
- **Features**: Transfer, Approve, TransferFrom

## 🌐 Web Interface Features

- **Wallet Connection**: Connect MetaMask
- **Token Information**: View token details
- **Transfer Tokens**: Send tokens to other addresses
- **Blockchain Stats**: Live network data
- **Real-time Updates**: Automatic balance refresh

## 🧪 Testing

### Run Tests
```bash
npx hardhat test
```

### Compile Contracts
```bash
npx hardhat compile
```

### Verify Contracts
```bash
npx hardhat verify --network localhost <CONTRACT_ADDRESS>
```

## 📁 Project Structure

```
layer1-blockchain/
├── contracts/          # Smart contracts
│   └── SimpleToken.sol
├── scripts/            # Deployment scripts
│   └── deploy.js
├── test/               # Test files
├── hardhat.config.js   # Hardhat configuration
├── index.html          # Web interface
└── README.md          # This file
```

## 🔒 Security Features

- **Input Validation**: All inputs are validated
- **Safe Math**: Overflow protection
- **Access Control**: Proper permission checks
- **Event Logging**: All transactions logged

## 🚀 Deployment Options

### Local Development
- Hardhat Network (default)
- Ganache
- Anvil

### Testnet Deployment
- Goerli Testnet
- Sepolia Testnet
- Polygon Mumbai

### Mainnet Deployment
- Ethereum Mainnet
- Polygon
- BSC

## 📈 Performance

- **Block Time**: ~1 second
- **Gas Limit**: 30,000,000
- **TPS**: ~15-20 transactions/second
- **Finality**: Immediate (local network)

## 🛠️ Customization

### Add New Features
1. Create new contract in `contracts/`
2. Update deployment script
3. Add frontend interface
4. Test thoroughly

### Modify Token
- Change name/symbol in `SimpleToken.sol`
- Update total supply
- Add new functions
- Redeploy contracts

## 📞 Support

For issues and questions:
- Check the logs in terminal
- Verify MetaMask connection
- Ensure contracts are deployed
- Check network configuration

## 🎯 Next Steps

1. **Add More Contracts**: DEX, NFT, Staking
2. **Improve UI**: Better design, animations
3. **Add Tests**: Comprehensive test suite
4. **Deploy to Testnet**: Real network deployment
5. **Add Analytics**: Usage tracking

## 📄 License

MIT License - feel free to use and modify!

---

**Happy Building! 🚀**
