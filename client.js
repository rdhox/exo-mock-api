// const { fetch } = require('./MockServiceApi.js');
const fetch = require('node-fetch');

const urlAPI = "https://aws.amazon.services/3435464575673543"

fetch(urlAPI + '/loadNewMessages', {hello: 'world'})
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));
