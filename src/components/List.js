import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import apiKey from './apiKey'

class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ingredients: new URLSearchParams(this.props.location.search).get('ingredients'),
            listOfRecipes: ''
        }
    }
    
    componentDidMount() {
        let ingredients = this.state.ingredients.replace(' ', '').split(',');
        let queryString = '';
        ingredients.forEach(item => {
            queryString += item + ',+'
        });
        queryString = queryString.substring(0, queryString.length-2);

        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${queryString}&number=50&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => { 
                this.setState({ 
                    ingredients: this.state.ingredients,
                    listOfRecipes: data.reverse()
                }) 
            });
    }

    render() {

        let list = this.state.listOfRecipes;


        // console.log('Before sorting', list);

        for (let i=0; i<list.length; i++) {
            for (let j=i+1; j<list.length; j++) {
                if (list[i].likes < list[j].likes) {
                    let temp = list[i];
                    list[i] = list[j];
                    list[j] = temp; 
                }
            }
        }



        // console.log('After sorting', list);

        const recipes = Array.prototype.map.call(list, (recipe) => {
            return (
                <div className='col-lg-4'>
                    <RecipeCard key={recipe.id} data={recipe}/>
                </div>
            )
        });
        // const recipes = <RecipCard data={recipes}/>

        return (
            <div className="">
                <h2 className="display-4">Mama Bear's Cuisine</h2>
                <div className="row">
                    {recipes}
                </div>
            </div>
        )
    }
}

export default List
