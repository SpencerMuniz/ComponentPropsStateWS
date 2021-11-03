import React, { Component } from 'react';
import "./SuperHeroTable.css"
class SuperHeroTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            superheroes: [
                {
                    name: 'Abracadaniel',
                    primary_ability: 'Weak rainbows',
                    secondary_ability: 'Rudimentary magic',
                },
                {
                    name: 'Earl of Lemongrab',
                    primary_ability: 'ear piercing scream',
                    secondary_ability: 'sending people to 10-years dungeon NO TRIALS!',
                },
                {
                    name: 'Me-Mow',
                    primary_ability: 'poison',
                    secondary_ability: 'agility',
                }
            ]
        }
    }
    render(){
        return(
            <div>
                {this.state.superheroes.map(function(superTable){
                    return (
                        <div>
                            <table>
                            <tr>
                                <th>Hero Name</th>
                                <th>Hero Primary Ability</th>
                                <th>Hero Secondary Ability</th>
                            </tr>
                            <tr>
                                <td>{superTable.name}</td>
                                <td>{superTable.primary_ability}</td>
                                <td>{superTable.secondary_ability}</td>
                            </tr>

                            </table>
                        </div>
                    )
                })}
                    
            </div>
        );
    }
}
export default SuperHeroTable;