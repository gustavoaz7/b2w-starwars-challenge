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
  let index = Math.floor(Math.random() * N_PLANETS) + 1
  if (indexesArray.includes(index)) {
    indexesArray[index] = 0
    if (indexesArray.reduce((a,b) => a + b, 0) === 0) {
      indexesArray = [...Array(N_PLANETS + 1).keys()]
    }
    return index
  } else {
    return generateNewIndex()
  }
}