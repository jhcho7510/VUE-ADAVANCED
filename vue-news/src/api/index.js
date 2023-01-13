import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}

export { // export default 안됨.. 해봤음 ㅜ.ㅜ 2023.01.13
    fetchNewsList,
    fetchJobsList,
    fetchAskList
}