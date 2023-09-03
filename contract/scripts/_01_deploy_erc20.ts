import { network, ethers, web3 } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

const E18n = 10n ** 18n;
const E18n_1M = 1_000_000n * E18n;

async function main() {
  const signers = await ethers.getSigners();
  console.log("Deploying contracts with the account:", signers.address);

  // const weiAmount = (await signers.getBalance()).toString();
  // console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

  const owner = signers[0];
  console.log("Deploying contracts with the account:", owner.address);

  // make sure to replace the "GoofyGoober" reference with your own ERC-20 name!
  const Token = await ethers.getContractFactory("SimperbyUSDC");
  const token = await Token.deploy();

  console.log("Token address:", token.address);
  // await erc20mock.deployed();
  // await erc721mock.deployed();

  // console.log(`ERC20Mock deployed at ${erc20mock.address} successfully`);
  // console.log(`ERC721Mock deployed at ${erc721mock.address} successfully`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


  