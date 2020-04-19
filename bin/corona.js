#!/usr/bin/env node

const program = require('commander');
const pkg = require('./../package.json')
const colors = require('colors');

program
  .version(pkg.version)
  .command('status', 'Get COVID-19 status in India')
  .action(() => console.log('Lets check COVID-19 status in India'.yellow))

program
  .command('statewise', 'Get COVID-19 status by statewise')

program
  .command('districtwise', 'Get COVID-19 status by District wise')

program.parse(process.argv)

