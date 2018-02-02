export default (res) => {
  const planet = { 
    name: res.data.name,
    population: res.data.population,
    climate: res.data.climate,
    terrain: res.data.terrain,
    films: res.data.films
  }
  return planet
}