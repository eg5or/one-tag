import * as axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:3001/`,
});

export const tagsAPI = {
    getAllTags() {
        return instance.get(`tags`)
    },
    changeRate(id, newRate) {
        return instance.patch(`tags/${id}`, {rate: newRate})
    },
    addNewTag(id, name) {
        return instance.post(`tags`, {id, name, rate: 0})
    },
}