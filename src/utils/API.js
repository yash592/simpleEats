import axios from 'axios';
const baseURL = 'https://api.edamam.com/search?q=rice&app_id='
const appID = '72f05384'
const appKey = '768f219116c35bb3a3ae7441e28d7c36'

export default {
  search: function() {
    const APIurl = baseURL + appID + '&app_key=' + appKey;
    console.log(APIurl)
    return axios.get(APIurl);
  }
}
