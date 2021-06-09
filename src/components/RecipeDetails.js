import React, { Component } from 'react'
import apiKey from './apiKey'
import { FaHeart } from 'react-icons/fa'

class RecipeDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipeId: this.props.match.params.id,
            recipeDetails: ''
        }
    }

    componentDidMount() {
        fetch(`https://api.spoonacular.com/recipes/${this.state.recipeId}/information?&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    recipeId: this.state.recipeId,
                    recipeDetails: data
                })
            });
    }

    getIngredientsList() {
        let ingrList = [];
        let data = this.state.recipeDetails;
        if (data.extendedIngredients) {
            ingrList = Array.prototype.map.call(data.extendedIngredients, (ingr) => {
                return <li>{ingr.originalString}</li>
            })
        }
        return ingrList;
    }

    getDirectionsList() {
        let directList = [];
        let data = this.state.recipeDetails;

        if (data.analyzedInstructions && data.analyzedInstructions[0] && data.analyzedInstructions[0].steps) {
            directList = Array.prototype.map.call(data.analyzedInstructions[0].steps, (step) => {
                return <li>{step.step}</li>
            });
        } else {
            directList = data.instructions;
        }
        return directList;
    }

    render() {
        let data = this.state.recipeDetails;

        return (
            <div className="recipeInstructions">
                <div className="row container">
                    <div className="col-lg-12">
                        <h1 className="recipeTitle">{data.title}</h1>
                        <h5>
                            <b>Ready in:</b>&nbsp;{data.readyInMinutes}&nbsp;mins |&nbsp;
                            <b>Servings:</b>&nbsp;{data.servings}
                        </h5>
                    </div>
                </div>
                <div className="row container">
                    <div className="col-lg-5 ta-left ingr">
                        {/* <div dangerouslySetInnerHTML={{ __html: data.summary }} />  
                        {data.summary} */}
                        <h3>Ingredients</h3>
                        <div>
                            {
                                this.getIngredientsList()
                            }
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="likes">
                            <FaHeart /> &nbsp;
                            {data.aggregateLikes} | &nbsp;
                            Health Score: {data.healthScore}
                        </div>
                        <img className="recipeDetailsImage" src={data.image} />
                    </div>
                </div>
                <div className="row container">
                    <div className="col-lg-11 ta-left ingr">
                        <h3>Directions</h3>
                        <div>
                            <ol>
                                {
                                    this.getDirectionsList()
                                }
                            </ol>
                        </div>
                        <hr />
                        <div className="">
                            <div dangerouslySetInnerHTML={{ __html: data.summary }} />
                        </div>
                    </div>
                </div>
                <div>
                    Recipe Source: <a href={data.sourceUrl} className="card-link">{data.sourceUrl}</a>
                </div>
            </div>
        )
    }
}

export default RecipeDetails
