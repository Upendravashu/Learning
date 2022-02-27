import React from 'react';

class Home extends React.Component{
    constructor(props){
        super()
        this.state={name:"Upendra",age:23}
    }
    handle=()=>{
        this.setState({name:'Shivendra',age:24})
    }
    render(){
        return(
            <>
                <h1>My name is a {this.state.name} {this.props.name}</h1>
                <h1>My age is a {this.state.age}</h1>
                <button onClick={this.handle}>Click</button>
            </>
        );
    }
}
export default Home;