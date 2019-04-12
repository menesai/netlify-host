// import React, { Component } from 'react'
// import netlifyIdentity from 'netlify-identity-widget'
// import {Redirect} from 'react-router-dom';

// export class Home extends Component {
//     constructor(){
//         super()
//         this.state={
//             isLogged: false
//         }
//     }

//     handleLogin = () => {
//         netlifyIdentity.open()
//         console.log(netlifyIdentity.currentUser());
//     }
    
//     handleLog = () => {
//         netlifyIdentity.logout()
//     }

//     afterLogin =() => {
//         netlifyIdentity.close()
//         this.setState({isLogged: true})
//         console.log(this.state.isLogged)
//     }

//     componentDidMount() {
//         netlifyIdentity.on("login", () => this.afterLogin());
//         // netlifyIdentity.on("logout", () => this.setState({ loggedIn: false }));
//       }

//   render() {
//       console.log(this.state.isLogged)
//     //   if(!this.state.isLogged){
//     //      return <Redirect to='/data'/>
//     //   }
//     return (
//       <div>
//         <h1>this is landing </h1>
//         <button onClick={this.handleLogin}>Login</button>
//       </div>
//     )
//   }
// }

// export default Home
