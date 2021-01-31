const chalk = require('chalk');

const os = require('os');
const dns = require('dns');


console.log(chalk.red('this is my first node app with git'));

console.log(os.version());
console.log(dns.getServers());
