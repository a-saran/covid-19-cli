const program = require('commander');
const statewise = require('../commands/statewise');

program
  .description('Set API key -- Get at https://nomics.com')
  .action(statewise.getStatewise)

program.parse(process.argv)