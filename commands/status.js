const CovidApi = require('../lib/CovidApi');
const formatter = require('../utils/formatter');

const status = {
  async getStatus() {
    const covidApi = new CovidApi();

    const res = await covidApi.getStatus();

    let output = `
      ${'Covid-19 cases in India'.yellow} \n
      Active: ${formatter.format(res.active).yellow} | Confirmed: ${formatter.format(res.confirmed).yellow} | Recovered: ${formatter.format(res.recovered).yellow} | ${'Deaths'.red}: ${formatter.format(res.deaths).yellow} 
    `
    console.log(output)
  }
}


module.exports = status;