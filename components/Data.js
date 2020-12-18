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
            this.props.Data.map( ({ header, patentNumber }) => (
              <a href="/patent" className="text-dark" name={patentNumber} onClick={this.props.getInfo}>
                <li key={patentNumber} name={patentNumber} className="text-left">
                <hr/>
                <h4 name={patentNumber}>{header}</h4>
                <h5 name={patentNumber}>{patentNumber}</h5>
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