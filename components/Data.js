import React, {useEffect, useState} from 'react'


export default function Data(props){
    return(
        <ul className="mt-5" id="list" >
          {console.log(props.Data)}
          {props.Data?(
              props.Data.map( ({ header, patentNumber }) => (
                <a>
                  <li key={patentNumber}>
                  {header}
                  <br />
                  {patentNumber}
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