import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullname: ' '
        }
    
    this.changeHandler=this.changeHandler.bind(this);
    this.SubmitHandler=this.SubmitHandler.bind(this);
    }

    changeHandler(e){
       
        this.setState({fullname: e.target.value});

     }

     　SubmitHandler(e){
        e.preventDefault();
         alert(`you just submit ${this.state.fullname}`);
         this.setState({fullname: ' '});
     }


    render() {
        return (
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <input type="text" value={this.state.fullname} onChange={this.changeHandler} />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        );
    }

}




export default Form;