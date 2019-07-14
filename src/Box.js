import React, { Component } from 'react';



class Box extends Component{

constructor(props){
    super(props);
    this.clickHandler=this.clickHandler.bind(this);
}

    clickHandler(){

    this.props.deleteBox();

    }

 render() {
     return (
         <div>
<div className="colorBox" style={ {width:this.props.width, height:this.props.height, backgroundColor:this.props.color}}>

</div>
<button onClick={this.clickHandler}>Delete this box</button>
         </div>
          
     );
 }


}

export default Box;