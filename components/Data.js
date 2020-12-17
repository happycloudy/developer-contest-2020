import React, {useEffect, useState} from 'react'


export default function Data(props){
    return(
        <ul className="mt-5" id="list" >
          {props.Data?(
              props.Data.map( ({ header, patentNumber }) => (
                <a href="/patent">
                  <li key={patentNumber} class="text-left">
                  <hr/>
                  <h4>{header}</h4>
                  <h5>{patentNumber}</h5>
                  </li>
                </a>
            ))
          ): (
              <div> Введите запрос </div>
          )

          }
        </ul>
    )
}

// props.Data.map( ({ header, patentNumber }) => (
//     <a>
//       <li key={patentNumber}>
//       {header}
//       <br />
//       {patentNumber}
//       </li>
//     </a>
// ))