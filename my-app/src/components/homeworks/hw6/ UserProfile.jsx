import axios from "axios"
import { useState,useEffect } from "react"
import styles from "./UserProfile.module.css"






function User(){
    const[users,setUsers]=useState(null)
    async function fetchUser() {
    axios 
    .get("https://randomuser.me/api")
    .then((respons)=>setUsers(respons.data.results[0]))
    .catch((erorr)=> console.error("Error", erorr))}

    useEffect(()=>{
        fetchUser()
    },[])



    return(
        <div>{users === null ?<p>Loading...</p>: <div>  <img src={users.picture.large}  alt="User" /> 
        <p>{users.name.first} {users.name.last}</p> 
        <p>{users.email}</p>
         <p>{users.phone}</p>
        <button onClick={()=> fetchUser()} >Load New User</button></div>}
       
       
        </div>
      
    )
}
export default User