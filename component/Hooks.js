import React,{useState} from 'react';

const Hooks = () => {
    const[obj,setObj]=useState({name:'Upendra',age:23})
    const handle = () =>{
        setObj({name:'Shivendra',age:24})
    }
  return (
      <>
          <h1>My name is {obj.name}</h1>
          <h1>My age is a {obj.age}</h1>
          <button onClick={handle}>Click</button>
      </>
  )
}

export default Hooks