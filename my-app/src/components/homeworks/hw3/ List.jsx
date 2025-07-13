import { useState } from "react";


function List(){
   const [people, setPeople] = useState([

    { id: 1, name: 'Иван', age: 20 },

    { id: 2, name: 'Мария', age: 22 },

    { id: 3, name: 'Алексей', age: 21 },

    { id: 4, name: 'Марина', age: 19 },

    { id: 5, name: 'Даша', age: 23 },

    { id: 6, name: 'Глеб', age: 24 },

    { id: 7, name: 'Дима', age: 18 },

    { id: 8, name: 'Гриша', age: 20 },

    { id: 9, name: 'Серафим', age: 21 }

  ]);

  return (
    <div style={{ color: "red" }}>{people.map((man)=><p key={man.id}>Имя:{man.name}  Возраст:{man.age} 
    <button style={{ backgroundColor: "black" ,width: '100px',color:"red" }} onClick={()=> {setPeople(people.filter((person,id)=> person.id !==man.id))}}>Удалить</button></p>)}</div>
  )

}

export default List