import React, { Component } from 'react';
import api from '../api';
import Card from './card/card';

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllStrategems().then(movies => {
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { movies, isLoading } = this.state

        return (
            <>
                <div className="card-container">
                    {
                        !isLoading && movies.map(movie => <Card name={movie.name} description={movie.description} faction={movie.faction} cost={movie.cost} tags={movie.tags} />)
                    }
                </div>

            </>
        )
    }
}

export default Test