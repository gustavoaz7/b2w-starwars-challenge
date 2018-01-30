import axios from 'axios'


export default function getPlanetInfo() {
  const url = generateURL(generateRandomIndex())
  return axios.get(url)
}

function generateURL(n) {
  return `https://swapi.co/api/planets/${n}/`
}

function generateRandomIndex() {
  return Math.floor(Math.random() * 61) + 1
}