import React from 'react'

const ResultsDisplay = (props) => (
  <div>
    <div>Style: {props.data.style}</div>
    <div>Climate: {props.data.climate}</div>
    <div>Age: {props.data.age}</div>
    <div>Vintage: {props.data.vintage}</div>
    <div>Varietals: {props.data.varietals}</div>
    <div>Country: {props.data.country}</div>
    <div>Region: {props.data.region}</div>
    <div>Sub-Region: {props.data.subregion}</div>
    <div>Quality: {props.data.quality}</div>
    <div>Other Observations: {props.data.otherObservations}</div>
  </div>
)

export default ResultsDisplay
