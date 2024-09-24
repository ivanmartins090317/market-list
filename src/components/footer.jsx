const Footer = ({items}) =>{
  const totalItemsPay =  items.reduce((acc, item) => item.stored ? acc + 1 : acc, 0)
   const percentsPay = ((totalItemsPay / items.length) * 100).toFixed(0)
   const singularOurPlural = items.length > 1 ? 'items' : 'item'
   return(
     <footer className="m-auto  text-center">
       <p>{`Você tem ${items.length} ${singularOurPlural} para comprar`}
       {items.length > 0 && <span> <br />{totalItemsPay} {singularOurPlural} comprado de {percentsPay} % da compra</span>}
       </p>
     </footer>
     
   )
 }

 export {Footer}