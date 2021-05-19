import React, { useState, useEffect } from 'react';
import Chips from 'react-chips';
import api from '../../api';

const SearchBar = () => {
    const [chips, setChips] = useState([])
    const [Suggestions, setSuggestions] = useState([])

    useEffect(() => {
        async function fetchSuggestions() {
            const resposne = await api.getAllTags()
            setSuggestions(resposne.data.data)
        }

        fetchSuggestions();
    }, []);


    const getStratByTags = async (body) => {
        try {
            await api.getStrategemsByTags(body)
        } catch (e) {
            console.error("something went wrong", e)
        }
    }

    const onChange = chips => {
        setChips([...chips]);
        getStratByTags(chips);

    }


    return (
        <div style={{width: '500px'}}>
            <Chips
                value={chips}
                onChange={onChange}
                suggestions={Suggestions}

            />
        </div>
    )
}

export default SearchBar
