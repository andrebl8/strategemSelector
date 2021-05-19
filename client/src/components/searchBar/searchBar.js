import React, { useState, useEffect } from 'react';
import Chips from 'react-chips';
import api from '../../api';
import { useUpdateTag } from '../../context/tagContext';

const SearchBar = () => {
    const [chips, setChips] = useState([])
    const [Suggestions, setSuggestions] = useState([])

    const updateTags = useUpdateTag();

    useEffect(() => {
        async function fetchSuggestions() {
            const resposne = await api.getAllTags()
            setSuggestions(resposne.data.data)
        }

        fetchSuggestions();
    }, []);


    const onChange = chips => {
        setChips([...chips]);
        updateTags(chips);
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
