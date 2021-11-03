import React, { Component } from 'react';

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
                            <table>{superTable.name}</table>
                            <table>{superTable.primary_ability}</table>
                            <table>{superTable.secondary_ability}</table>
                        </div>
                    )
                })}
                    
            </div>
        );
    }
}
export default SuperHeroTable;