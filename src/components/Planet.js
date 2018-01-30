import React from 'react'

export default (props) => (
  <div className="container">
    <table>
      <thead>
        <tr>
          <td>{props.name}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Population</td>
          <td>{props.population.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</td>
        </tr>
        <tr>
          <td>Climate</td>
          <td>{props.climate}</td>
        </tr>
        <tr>
          <td>Terrain</td>
          <td>{props.terrain}</td>
        </tr>
        <tr>
          <td>Featured in {props.films.length} {props.films.length > 1 ? 'films' : 'film'}</td>
        </tr>
      </tbody>
    </table>
  </div>
)