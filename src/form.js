import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullname: ' ',
            email: '',
            address: ' '
            
        }
    
    this.changeHandler=this.changeHandler.bind(this);
    this.SubmitHandler=this.SubmitHandler.bind(this);
    }

    changeHandler(e){
       
        this.setState(
            {[e.target.name]: e.target.value});

     }

     　SubmitHandler(e){
        e.preventDefault();
         alert(`you just submit ${this.state.fullname}`);
        // e.persist();
         console.log(e.target);
        
         this.setState(state=>{
           return Object.keys(state).reduce((accu,item)=>({...accu, [item]:" "}), {})
         });
     }


    render() {
        return (
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <lab htmlFor="fullname">Full Name:</lab>
                    <input type="text" name='fullname' value={this.state.fullname} onChange={this.changeHandler} />
                    <input type="email" name='email' value={this.state.email} onChange={this.changeHandler} />
                    <input type="address" name='address' value={this.state.address} onChange={this.changeHandler} />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        );
    }

}




export default Form;