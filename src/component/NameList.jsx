import React, { Component } from "react";

class NameList extends Component{
    constructor(props){
        super(props)

        this.state = {
            names: [
                {
                    name: 'Spencer '
                },
                {
                    name: 'Kristin '
                },
                {
                    name: 'Mia '
                },
                {
                    name: 'Lilah '
                }
            ]
        }
    }
    render(){
        return(
            <div>
                {this.state.names.map(function(listOfNames){
                    return (
                        <div>
                            <li>{listOfNames.name}</li>
                        </div>
                    )
                })}
                    
            </div>
        );
    }
}
export default NameList