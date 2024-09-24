import { useState } from "react" 

import { Form } from "./components/form"
import { ItemComponent } from "./components/item"
import { Footer } from "./components/footer"


const App = () => {
const [items, setItems] = useState([])
const [showInput, setShowInput] = useState("false")


const handleAddItem = (item) => setItems(prevState => [...prevState, item])
const handleToggleInput = () =>setShowInput(prev =>!prev)


  return(
    <div className="w-[95%] md:w-[50%] m-auto">
      <div className="w-full mt-5 text-center mb-5">
        <button onClick={handleToggleInput} 
         className="py-1 px-4 rounded-md bg-gray-50"
         >{showInput ? "- remover" : "+ adicionar"}</button>
      </div>
        { showInput && <Form onAddItem={handleAddItem}/>}   
        {items && <ItemComponent items={items} setItems={setItems}/>}
        <div className="mb-[5%]"></div>
        <Footer items={items}/>
    </div>
  )
}
  
export { App } 