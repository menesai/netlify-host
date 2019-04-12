import React, { Component } from 'react'
import axios from 'axios'

class GetReq extends Component {
    constructor(){
        super();
        this.state= {
            newData: []
        }
    }

    componentDidMount(){
        axios
        .get('https://www.balldontlie.io/api/v1/teams')
        .then(res => {
            this.setState({newData: res.data.data})
        })
    }

  //  display = this.state.newData.map((el,i) => {
  //    return(
  //      <div key={i}>
  //      </div>
  //    )
  //  })

  render() {
    // console.log(this.state.newData)
    let display =this.state.newData.map((el, i) => {
      return(
        <div key={i}>
          <h1>{el.full_name}</h1>
          <p>City: {el.city}</p>
          <p>Conference: {el.conference}</p>
          <p>Division: {el.division}</p>
        </div>
      )
    })
    return (
      <div>
        {display}
      </div>
    )
  }
}

export default GetReq
