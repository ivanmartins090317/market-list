import { useState } from "react"
import { ModelItem } from "../utilits/ModelItem"

const ids = Array.from({length: 10}, () => crypto.randomUUID())


const Form = ({ onAddItem}) =>{
  const [value, setValue] = useState(1)
  const [inputValue, setInputValue] = useState('')

  const handleSelectOption = (e) => setValue(e.target.value)
  const handleInpuValue = (e) => setInputValue(e.target.value)

  const handleSubmit = (e) =>{
    e.preventDefault()

    const newItem = new ModelItem(inputValue, value)
    
    onAddItem(newItem)
    setInputValue("")
    setValue(1)
  }


  return(
    <>
     <form onSubmit={handleSubmit}>
          <div className="p-4 ">
          <div className="flex relative rounded-md shadow-sm w-76 m-auto ml-[-15px]">
          <select id="currency" name="currency" 
                    value={value} 
                    onChange={handleSelectOption}
                    className="outline-none px-5"
                    >
                    
                 {
                 ids.map((id, index) => <option key={id} value={index + 1} className="outline-none border-none">{index + 1}</option>
                 )
                 }
            </select>
                <input type="text" name="price" id="price" 
                 className="border-slate-700 outline-none p-4" 
                 placeholder="Insira o item..."
                 value={inputValue}
                 onChange={handleInpuValue}
                 />
             
          
            <button className="bg-green-200 md:ml-[47%] p-4 rounded-r-md text-sm font-bold">INSERIR</button>
        </div>
      </div>
  </form> 
    </>
  )
}


export { Form }