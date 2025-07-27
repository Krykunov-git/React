import axios from "axios"
import { useState,useEffect } from "react"
import styles from "./UserProfile.module.css"


function User(){
    const[users,setUsers]=useState(null)
     function fetchUser() {
    axios 
    .get("https://randomuser.me/api")
    .then((respons)=>setUsers(respons.data.results[0]))
    .catch((erorr)=> console.error("Error", erorr))}

    useEffect(()=>{
        fetchUser()
    },[])



    return(
        <div className={styles.card}>{users === null ?<p>Loading...</p>: 
        <div>  <img className={styles.img} src={users.picture.large}  alt="User" /> 
         <p className={styles.name}>{users.name.first} {users.name.last}</p>
       <p className={styles.email}>{users.email}</p>
  <p className={styles.phone}>{users.phone}</p>
  <button onClick={fetchUser} className={styles.button}>Load New User</button>
        </div>}
       
       
        </div>
      
    )
}
export default User