import React from 'react';

export class CharacterDetails extends React.Component {    

    render() {
        const {name, imageUrl} = this.props.character;
        return(
            <div>
                <div className="card-header">
                    Character Details: {name}
                </div>
            
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <img src={imageUrl} alt={name}/>
                        </div>
                        
                        <div className="col">
                            <div className="row">
                                <div className="col-3">
                                    Height:
                                </div>
                                <div className="col">
                                    {}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="card-footer">
                    <button className="btn btn-outline-secondary">
                        <i className="fa fa-chevron-left"></i>
                        Back
                    </button>
                </div>
            </div>
        );
    }
}

export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            character: {
                name: "Luke Skywalker",
                imageUrl: "assets/images/characters/luke.png",
                height: "172",
                mass: "77",
                hair_color: "blond",
                skin_color: "fair",
                eye_color: "blue",
                birth_year: "19BBY",
                gender: "male",
                id: 1,
                strength: 5,
                created: "2014-12-09T13:50:51.644000Z",
                edited: "2014-12-20T21:17:56.891000Z"
            }
        };
    }

    render(){
        return(<div>
            <CharacterDetails character={this.state.character}/>
        </div>);
    }
}
/*
    return (
       <div className="card">
            <CharacterDetails character={ this.state.character }></CharacterDetails>
    
</div>

    )*/