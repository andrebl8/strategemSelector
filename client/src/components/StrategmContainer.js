import React, { useState, useEffect } from 'react';
import api from '../api';
import { useTag } from '../context/tagContext';
import Card from './card/card';
import Spinner from './spinner/Spinner';

export default function StrategmContainer() {

    const [strategems, setStrategems] = useState([]);
    const [loading, setLoading] = useState(true);

    const tags = useTag()

    const getStragems = async () => {
        setLoading(true)

        await api.getAllStrategems().then(result => {
            setStrategems(result.data.data);
            setLoading(false);
        })
    }

    const getStratByTags = async (body) => {
        if (!body.length) return;
        setLoading(true);

        try {
            const result = await api.getStrategemsByTags(body)
            console.log("result", result)
            
            setStrategems(result.data)
        } catch (e) {
            console.error("something went wrong", e)
        } finally {
            setLoading(false)
        }
     }


    useEffect(() => {
        getStragems()
    },[])

    useEffect(() => {
        getStratByTags(tags)
    },[tags])

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

