const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying Layer1 Token...");
  
  const SimpleToken = await ethers.getContractFactory("SimpleToken");
  const token = await SimpleToken.deploy(1000000); // 1 million tokens
  
  await token.deployed();
  
  console.log("Layer1 Token deployed to:", token.address);
  console.log("Total supply:", (await token.totalSupply()).toString());
  console.log("Token name:", await token.name());
  console.log("Token symbol:", await token.symbol());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
