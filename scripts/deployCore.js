const hre = require("hardhat");

async function main() {
    const Core = await hre.ethers.getContractFactory("QuantoSwapV2Factory");
    const core = await Core.deploy();

    await core.deployed();

    const coreContract = (await Core.start())
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
