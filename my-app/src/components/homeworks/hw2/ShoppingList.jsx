

function ShoppingList({items}){

    if(items.length === 0){
        return <p>Список пуст</p>
    }

    return <ul>
        {items.map((item)=> <li>{item}</li>)}
    </ul>



}
export default ShoppingList