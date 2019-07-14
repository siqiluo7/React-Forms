import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';


class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Boxs: []

        }
        this.DrawBox = this.DrawBox.bind(this);
        this.addBox=this.addBox.bind(this);
    }
    addBox(box) {

        this.setState(
            state => ({

                Boxs: [...state.Boxs, box]

            })


        );

    }
    DrawBox(){
        let Boxs=[];
        for(let i=0;i<this.state.Boxs.length;i++){
              Boxs.push(<Box color={this.state.Boxs[i].color} width={this.state.Boxs[i].width} height={this.state.Boxs[i].height}/>);


        }
        return Boxs;
    }

    render() {
        return (
            <div>
                <NewBoxForm boxState={this.DrawBox} addBox={this.addBox} />
                {this.DrawBox()}
                
            </div>
        );
    }


}

export default BoxList;