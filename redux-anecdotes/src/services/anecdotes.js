import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
   const response = await axios.get(baseUrl)
   console.log(response)
   return response.data
}

const create = async (content) => {
   const object = {content, votes: 0}
   const response = axios.post(baseUrl, object)
   return (await response).data
}

const update = async (id, votes) => {
   const response = await axios.put(`${baseUrl}/${id}`, votes)
   return response.data
}


export default {
   getAll,
   create,
   update
}