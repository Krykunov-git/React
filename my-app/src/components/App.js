import Image from "./homeworks/hw1/ImageComponent";
import Paragraph from "./homeworks/hw1/ParagraphsComponent";
import Lists from "./homeworks/hw1/ListsComponent";
import Video from "./homeworks/hw1/VideoComponent";
import Greeting from "./homeworks/hw2/ Greeting";
import ShoppingList from "./homeworks/hw2/ShoppingList";



function App(){
    const products = ["Bread", "Milk", "Cheese", "Eggs"];

    return (
    <div >
      <Image/>
       <Paragraph/>
        <Lists/>
          <Video/>
           <Greeting name="Ivan"/>
              <ShoppingList items={products}/>
          
        
    </div>   

  )
    
}

 



   


export default App;
