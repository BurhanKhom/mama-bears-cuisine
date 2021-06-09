import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'

class Recipes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredients: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            ingredients: e.target.value
        });
    }

    render() {
        return (
            <div className="">
                <div className="jumbotron">
                    <div className="container title">
                        <p className="lead">Enjoy your healthy delicious meal</p>
                        <h1 className="display-4">Mama Bear's Cuisine</h1>
                        <hr className="my-4" />
                        <h4>A recipe has no soul. You as the cook must <i>bring soul&nbsp;</i> to the recipe.</h4>
                        {/* <a className="btn btn-success btn-lg" href="/recipes" role="button">Start Cooking</a> */}
                        <div class="search-box">
                            <form action={`/recipes/list`} method="GET">
                                <input class="search-input" type="text" name="ingredients" placeholder="What's in your fridge?" onChange={this.onChangeHandler} autoComplete="Off" />
                                <button type="submit" class="btn btn-outline-secondary search-btn">
                                    <FaSearch />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipes
