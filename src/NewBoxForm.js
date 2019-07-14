import React, { Component } from 'react';






class NewBoxForm extends Component{
    constructor(props){
        super(props);
        this.state={
            'width':'',
            'height':'',
            'color':''
        }

        
        this.changeHandler=this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }
changeHandler(e){

      this.setState(
          {[e.target.name]:e.target.value}
      )

}
submitHandler(e){
    e.preventDefault();
    this.props.addBox(this.state);

    let newState={
        'width':'',
            'height':'',
            'color':''
    }
    this.setState(
      ()=>{
        return newState
      }

    );
}

render() {
    return (
         <div>
           <form onSubmit={this.submitHandler}>
            <label htmlFor="color">Color:</label>
            <input name="color" type="text" value={this.state.color} onChange={this.changeHandler}/>
            <label htmlFor="height">Height:</label>
            <input name="height" type="text" value={this.state.height} onChange={this.changeHandler}/>
            <label htmlFor="width">Width:</label>
            <input name="width"  type="text" value={this.state.width} onChange={this.changeHandler}/>
            <button type="submit">Add a new ColorBox</button>


           </form>

         </div>
    );
}


}

export default NewBoxForm;