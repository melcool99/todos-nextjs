import axios from "axios"

const  users = async(req, res) => {
  const id = req.query.id
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
  const {data} = response
  

  if (data) {
    res.status(200).json(data)
    
  } else {
    res.status(404).end()
    
  }

}



export default users