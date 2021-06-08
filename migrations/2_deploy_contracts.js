const MySafeToken = artifacts.require('MySafeToken.sol');

module.exports = function (deployer, network) {
  if(network === 'bscTestnet') {
    deployer.deploy(MySafeToken, '0xD99D1c33F9fC3444f8101754aBC46c52416550D1');
  } else {
    deployer.deploy(MySafeToken, '0x10ED43C718714eb63d5aA57B78B54704E256024E');
  }
};
