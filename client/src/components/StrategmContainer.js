import React, { useState, useEffect } from 'react';
import api from '../api';
import Card from './card/card';
import Spinner from './spinner/Spinner';

export default function StrategmContainer() {

    const [strategems, setStrategems] = useState([]);
    const [loading, setLoading] = useState(true);


    const getStragems = async () => {
        setLoading(true)

        await api.getAllStrategems().then(result => {
            setStrategems(result.data.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        getStragems()
    },[])

    if (loading) {
        return (
            <div className="spinner-container">
                <Spinner />
            </div>
        )
    }

    return (

        <div className="card-container">
            {
                !loading && strategems.map(stragem => <Card name={stragem.name} description={stragem.description} faction={stragem.faction} cost={stragem.cost} tags={stragem.tags} />)
            }
        </div>

    )
    
}

