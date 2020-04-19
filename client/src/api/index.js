import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

// get
export const getAllStrategems = () => api.get(`/allStrategems`)
export const getAllTags = () => api.get(`/allTags`)

// post
export const insertMovie = payload => api.post(`/strategem`, payload)
export const updateMovieById = (id, payload) => api.put(`/strategem/${id}`, payload)
export const getMovieById = id => api.get(`/strategem/${id}`)

// delete
export const deleteMovieById = id => api.delete(`/strategem/${id}`)

const apis = {
    insertMovie,
    getAllStrategems,
    updateMovieById,
    deleteMovieById,
    getMovieById,
    getAllTags,
}

export default apis