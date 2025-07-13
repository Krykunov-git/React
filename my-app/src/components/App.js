import Image from "./homeworks/hw1/ImageComponent";
import Paragraph from "./homeworks/hw1/ParagraphsComponent";
import Lists from "./homeworks/hw1/ListsComponent";
import Video from "./homeworks/hw1/VideoComponent";
import Greeting from "./homeworks/hw2/ Greeting";
import ShoppingList from "./homeworks/hw2/ShoppingList";
import OrderStatus from "./homeworks/hw2/OrderStatus";
import Rating from "./homeworks/hw3/Rating";



function App(){
    const orders = [
  { orderId: 101, status: "в пути" },
  { orderId: 102, status: "доставлен" },
  { orderId: 103, status: "ожидает оплаты" },
];
    const products = ["Bread", "Milk", "Cheese", "Eggs"];

    return (
    <div >
      <Image/>
       <Paragraph/>
        <Lists/>
          <Video/>
           <Greeting name="Ivan"/>
              <ShoppingList items={products}/>
              <OrderStatus orderId={orders[0].orderId} status={orders[0].status} />
               <Rating/>
          
        
    </div>   

  )
    
}

 



   


export default App;
