import React, {useEffect, useState} from 'react'

export default function Patentfound(props){
    return(
      <div className="container mt-5">
      <div id="number" className="text-left"><b>Patent Number: </b>{props.patentNumber}</div>
      <div id="country" className="text-left"><b>Country: </b>{props.country}</div>
      <div id="mpk" className="text-left"><b>Current International Classification: </b>{props.mpk}</div>
      <div id="application" className="text-left"><b>App.: </b>{props.application}</div>
      <div id="publicationDate" className="text-left"><b>Publ.: </b>{props.publDate}</div>
      <div id="authors" className="text-left"><b>Authors: </b>{props.author1}<br/><b>Right holder: </b>{props.author2}</div>
      <div id="Name" className="text-center mt-5"> <h4>{props.patentName} </h4></div>
      <div id="abstract" className="text-justify">{props.abstract}</div>
      </div>
    )
}
