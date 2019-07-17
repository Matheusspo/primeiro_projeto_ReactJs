import axios from 'axios'
import Series from './Series';
import { green } from 'ansi-colors';

const api = axios.create({
    baseURL: 'http://localhost:3001/'    
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const loadSeriesByGenre = (genre) => api.get('series?='+ genre)
const apis = {
    loadGenres: loadGenres,
    saveSeries: saveSeries,
    loadSeriesByGenre: loadSeriesByGenre
}   

export default apis