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
          <div>
          <div className="relative mt-5 rounded-md shadow-sm">
                <input type="text" name="price" id="price" 
                 className="block w-full rounded-md border-0 py- 
                  1.5 pl-7 pr-20 
                 text-gray-900 ring-1 ring-inset ring-gray-300 
                  placeholder:text- 
                 gray-400 focus:ring-2 focus:ring-inset 
                  focus:ring-indigo-600 
                 sm:text-sm sm:leading-6" 
                 placeholder="Insira o item..."
                 value={inputValue}
                 onChange={handleInpuValue}
                 />
                <div className="absolute inset-y-0 right-0 flex 
                 items-center">

                
                  <select id="currency" name="currency" 
                   className="h-full rounded-md border-1 bg- 
                    transparent py-0 pl-2 pr-7 text-gray-500 
                     focus:ring-2 focus:ring-inset focus:ring- 
                      indigo-600 sm:text-sm" 
                      value={value} 
                      onChange={handleSelectOption}>
              {
                ids.map((id, index) =>(
                 <option key={id} value={index + 1}>{index + 1}</option>
                )

                )
              }
            </select>
          </div>
        </div>
      </div>
  </form> 
    </>
  )
}


export { Form }