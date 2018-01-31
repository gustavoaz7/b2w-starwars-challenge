import axios from 'axios'

const N_PLANETS = 61
let indexesArray = [...Array(N_PLANETS + 1).keys()]

export default function getPlanetInfo() {
  const url = generateURL(generateNewIndex())
  return axios.get(url)
}

function generateURL(n) {
  return `https://swapi.co/api/planets/${n}/`
}

function generateNewIndex() {
  if (indexesArray.length === 1) {
    indexesArray = [...Array(N_PLANETS + 1).keys()]
    return generateNewIndex()
  }
  let index = Math.floor(Math.random() * (indexesArray.length - 1)) + 1
  let n = indexesArray[index]
  indexesArray.splice(index, 1)
  return n
}