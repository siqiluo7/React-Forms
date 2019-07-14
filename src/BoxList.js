import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import uuid from 'uuid/v4';


class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Boxs: []

        }
        this.DrawBox = this.DrawBox.bind(this);
        this.addBox = this.addBox.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }
    addBox(box) {
        let newBox = { ...box, id: uuid() };

        this.setState(
            state => ({

                Boxs: [...state.Boxs, newBox]

            })


        );

    }
    deleteBox(id) {
        this.setState(state => {
            debugger;
            const updates = {
                Boxs: state.Boxs.filter(b => b["id"] !== id)
            }
            console.log(updates)
            return updates;
    }




        );
    }
    DrawBox() {
        let Boxs = [];
        for (let i = 0; i < this.state.Boxs.length; i++) {
            Boxs.push(<Box deleteBox={this.deleteBox} key={this.state.Boxs[i].id} id={this.state.Boxs[i].id} color={this.state.Boxs[i].color} width={this.state.Boxs[i].width} height={this.state.Boxs[i].height} />);


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