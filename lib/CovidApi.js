const axios = require('axios');
const colors = require('colors');

class CovidApi {
  constructor() {
    this.statusUrl = 'https://api.covid19india.org/data.json';
    this.statewiseUrl = 'https://api.covid19india.org/state_district_wise.json';
    this.stateData = null;
  }

  async getStatus() {
    try {
      if(!this.stateData) {
        const res = await axios.get(this.statusUrl)
        this.stateData = res.data;
        return res.data['statewise'][0]
      }

      return this.stateData['statewise'][0]
    } catch (err) {
      handleError()
    }
  }

  async getStateWise() {
    try {
      if(!this.stateData) {
        const res = await axios.get(this.statusUrl)
        this.stateData = res.data;
        return res.data['statewise']
      }

      return this.stateData['statewise']
    } catch (err) {
      handleError()
    }
  }

  async getDistrictData() {
    try {
      const res = await axios.get(this.statewiseUrl)

      return res.data;
    } catch (err) {
      handleError()
    }
  }
}

function handleError() {
  console.log('Something went wrong, check your internet connectivity and try again later'.red)
  process.exit(1);
}

module.exports = CovidApi;
