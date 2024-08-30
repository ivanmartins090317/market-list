import { useState } from "react" 

import { Form } from "./componets/form"

const App = () => {
const [items, setItems] = useState([])
console.log(items);

const handleAddItem = (item) => setItems(prevState => [...prevState, item])
 
  return(
    <>
     <Form onAddItem={handleAddItem}/>
     {items && 
     <h2 key={items.id}>{items.name}</h2>
     }
    </>
  )
}

export { App } 