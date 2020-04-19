const program = require('commander');
const status = require('../commands/status');

program
  .description('Set API key -- Get at https://nomics.com')
  .action(status.getStatus)

program.parse(process.argv)