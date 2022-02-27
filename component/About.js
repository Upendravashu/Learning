import React from 'react';

class About extends React.Component{
    constructor(){
        super()
        this.state={user:[]}
    }
    componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resp=>resp.json())
       .then(data=>{
           this.setState({user:data})
       })
    }
    render(){
        return(
            <>
               <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
  {
      this.state.user.map((u,i)=>{
        return( <tr key={i}>
      <th scope="row">{i+1}</th>
      <td>{u.name}</td>
      <td>{u.email}</td>
      <td>{u.address.street}</td>
    </tr>
      )})
  }
   
    
  </tbody>
</table>
            </>
        );
    }
}
export default About;