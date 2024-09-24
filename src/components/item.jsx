
import { TrashIcon } from "lucide-react"

const ItemComponent = ({items, setItems}) =>{
  const handleDeleteItem = (itemID) => setItems(items.filter(item => item.id !== itemID))
  const handlecheck = (itemID) =>{
    setItems(prevState => prevState.map(item => item.id === itemID ? {...item, stored : !item.stored} : item))
  }
 return (

   items?.map(item =>(
     <div key={item.id} className="flex items-center justify-center gap-6 border-b w-56 py-1 m-auto mb-6">
       <input 
        type="checkbox" 
        name="item-list" 
        onChange={() => handlecheck(item.id)}
        />
      <span className={item.stored ? 'line-through' : ''}> 
       <p className="font-semibold text-lg">{item.name} {item.quantity} unidade</p> 
        
      </span>
        <TrashIcon size={14} onClick={() => handleDeleteItem(item.id)}/>
     </div>
     ))
 )

}

export { ItemComponent }