import React, { Component } from 'react'

class RecipeCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            image: this.props.data.image,
            missedIngredients: this.props.data.missedIngredients
        }
    }

    render() {
        let youNeed = Array.prototype.map.call(this.state.missedIngredients, (item) => {
            return item.name;
        });
        return (
            <div className="col-lg-3">
                <div className="card">
                    <div className="">
                        <img className="card-img-top" src={this.state.image} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item missing">Missing Ingredients: {youNeed.join(', ')}</li>
                    </ul>
                    <div className="card-body ta-center">
                        <a href={`/recipes/details/${this.state.id}`} className="card-link btn btn-outline-secondary" type="button">Recipe</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeCard
