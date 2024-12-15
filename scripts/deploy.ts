import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const ArbitrageTrader = await ethers.getContractFactory("ArbitrageTrader");
  const trader = await ArbitrageTrader.deploy();
  await trader.waitForDeployment();

  console.log("ArbitrageTrader deployed to:", await trader.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
