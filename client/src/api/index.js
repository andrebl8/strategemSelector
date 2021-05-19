import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

// get
export const getAllStrategems = () => api.get(`/allStrategems`)
export const getAllTags = () => api.get(`/allTags`)

// post
export const insertStrategem = payload => api.post(`/strategem`, payload)
export const updateStrategemById = (id, payload) => api.put(`/strategem/${id}`, payload)
export const getStragemById = id => api.get(`/strategem/${id}`)
export const getStrategemsByTags = payload => {
    if (!payload.length) return;
    api.post(`/strategemByTags`, {"tags": payload})
}

// delete
export const deleteStragemById = id => api.delete(`/strategem/${id}`)

const apis = {
    insertStrategem,
    getAllStrategems,
    updateStrategemById,
    deleteStragemById,
    getStragemById,
    getAllTags,
    getStrategemsByTags
}

export default apis