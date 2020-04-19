const inquirer = require('inquirer');
const colors = require('colors');
const CovidApi = require('../lib/CovidApi');

const districtwise = {
  async getDistrictwise() {
    const covid = new CovidApi();

    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'state',
        message: 'Enter state'.yellow ,
        validate: (input) => input === '' ? 'This value is required'.red : true
      }
    ]);

    const res = await covid.getDistrictData()

    if( !Object.keys(res).find(e => e.toLowerCase() === input.state.toLowerCase() )) {
      console.log('Please enter a valid State'.red)
      return;
    }

    let key = '';

    Object.keys(res).filter(d => {
      if(d.toLowerCase() === input.state.toLowerCase()){
        key=d;
      }
    })

    let output= `\n${state('District').red} | ${'confirmed'.red} \n\n`;

    Object.keys(res[key]['districtData']).map(d => {
      output += `${state(d).yellow} | ${res[key]['districtData'][d]['confirmed']} \n`
    }) 
    console.log(output)
  }
}

function state(str) {
  return str.padEnd(30, ' ')
}

module.exports = districtwise;
