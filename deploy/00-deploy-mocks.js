const { network } = require("hardhat")
const { developmentChains, DECIMALS, INITIAL_ANSWER } = require("../helper-hardhat-config")

module.exports.default = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    log(network.name)

    if (developmentChains.includes(network.name)) {
      log("Local network detected")
      await deploy("MockV3Aggregator", {
          constract: "MockV3Aggregator",
          from: deployer,
          log: true,
          args: [DECIMALS, INITIAL_ANSWER]
      })
      log("Mocks deployed")
      log("------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]