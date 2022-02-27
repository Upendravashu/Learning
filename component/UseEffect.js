
import React,{useState,useEffect} from 'react';
import axios from 'axios';

const UseEffect = () => {
    const[user,setUser]=useState([]);
       useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(resp=>{
           setUser(resp.data)
       }) 
       .catch(()=>{
           console.log('Network error')});
    },[])
  return (
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
      user.map((u,i)=>{
        return(
            <tr key={i}>
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
  )
}
export default UseEffect;