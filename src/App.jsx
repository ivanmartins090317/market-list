import { useState } from "react" 

import { Form } from "./componets/form"

const App = () => {
const [items, setItems] = useState([])

const handleAddItem = (item) => setItems(prevState => [...prevState, item])
const handleDeleteItem = (itemID) => setItems(items.filter(item => item.id !== itemID))
const handlecheck = (itemID) =>{
  setItems(prevState => prevState.map(item => item.id === itemID ? {...item, stored : !item.stored} : item))
}
  return(
    <>
     <Form onAddItem={handleAddItem}/>
     {items && 
      
        items.map(item =>(
          <div key={item.id} className="flex items-center justify-center mt-8 gap-6 border w-56 py-1 rounded-md m-auto">
            <input type="checkbox" name="item-list" onChange={() => handlecheck(item.id)}/>
           <span className={item.stored ? 'line-through' : ''}> 
            {item.name}-
            {item.quantity}
           </span>
             <button className="border px-1 rounded-md bg-red-400" onClick={() => handleDeleteItem(item.id)}>
              X
             </button>
          </div>
        ))
      
     }
    </>
  )
}

export { App } 