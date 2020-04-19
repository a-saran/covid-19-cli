
const colors = require('colors');
const CovidApi = require('../lib/CovidApi');

const statewise = {
  async getStatewise() {
    const covid = new CovidApi();

    const res = await covid.getStateWise()
    const data = res.slice(1);

    let output = `${state('State:').green} | ${confirmed('Confirmed').green} | ${recovered('Recovered').green} | ${deaths('Deaths').green} \n\n`;
    
    data.forEach(district => {
      output += `${state(district.state)} | ${confirmed(district.confirmed).yellow} | ${recovered(district.recovered)} | ${deaths(district.deaths).red} \n`
    });

    console.log(output)
  }
}

function state(str) {
  return str.padEnd(30, ' ')
}
function confirmed(str) {
  return str.padEnd(11, ' ')
}
function recovered(str) {
  return str.padEnd(10, ' ')
}
function deaths(str) {
  return str.padEnd(6, ' ')
}

module.exports = statewise;