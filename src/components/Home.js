import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="">
                <div className="jumbotron">
                    <div className="container title">
                        <p className="lead">Enjoy your healthy delicious meal</p>
                        <h1 className="display-4">Mama Bear's Cuisine</h1>
                        <hr className="my-4" />
                        <h4>A recipe has no soul. You as the cook must <i>bring soul&nbsp;</i> to the recipe.</h4>
                        <a className="btn btn-outline-secondary btn-lg start" href="/recipes" role="button">Start Cooking</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
