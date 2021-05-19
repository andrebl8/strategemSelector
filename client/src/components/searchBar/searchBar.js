import React, { useState, useEffect } from 'react';
import Chips from 'react-chips';
import api from '../../api';

const SearchBar = ({ }) => {
    const [chips, setChips] = useState([])
    const [Suggestions, setSuggestions] = useState([])

    useEffect(() => {
        async function fetchSuggestions() {
            const resposne = await api.getAllTags()

            console.log("resposne", resposne.data.data)

            setSuggestions(resposne.data.data)
        }

        fetchSuggestions();
    }, []);

    const onChange = chips => {
        setChips([...chips]);
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
