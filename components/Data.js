import React, {useEffect, useState} from 'react'
import Patent from '../pages/patent'

export default class Data extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return(

      <ul className="mt-5" id="list" >
        {this.props.Data && !this.props.isPatent?(
            this.props.Data.map( ({ header, patentNumber ,Database}) => (
              <a href="/patent" className="text-dark" name={patentNumber} title={Database} onClick={this.props.getInfo}>
                <li key={patentNumber} name={patentNumber} title={Database}  className="text-left">
                <hr style={{border: "2px solid black", backgroundColor: "black"}}/>
                <h4 name={patentNumber} title={Database} >{header}</h4>
                <h5 name={patentNumber} title={Database} >{patentNumber}</h5>
                </li>
              </a>
          ))
        ):(
            this.props.isPatent && <Patent
              Info={this.props.Info}
              goBack={this.props.goBack}
            />
        )
        }
      </ul>
  )
  }
}