import React, {createContext, useContext, useState} from 'react';


const TagContext = createContext();
const UpdateTagcontext = createContext();


export function useTag(){
    return useContext(TagContext);
}

export function useUpdateTag(){
    return useContext(UpdateTagcontext);
}

export function TagProvider({children}) {
    const [tags, setTags] = useState([]);

    const updateTagsToSearchFor = (searchTags) => {
        setTags(searchTags)
    }

    return (
        <TagContext.Provider value={tags}>
            <UpdateTagcontext.Provider value={updateTagsToSearchFor}>
                {children}
            </UpdateTagcontext.Provider>
        </TagContext.Provider>
    )
}

