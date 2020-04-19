const program = require('commander');
const districtwise = require('../commands/districtwise');

program
  .description('Get district wise data on the state')
  .action(districtwise.getDistrictwise)

program.parse(process.argv)
