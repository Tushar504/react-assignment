import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:50
  });
  
    // Create add and remove functions here that changes the
    const  change=(key,value)=>{
      if(key==="books"){
        if(value>=0){
            setInv({...inv,books:value})
        }
      }
      
      if(key==="notebooks"){
        if(value>=0){
            setInv({...inv,notebooks:value})
        }
      }

      if(key==="pens"){
        if(value>=0){
          setInv({...inv,pens:value})
        }
      }

      if(key==="inkpens"){
        if(value>=0){
          setInv({...inv,inkpens:value})
        }
      }
    }
    const total=(inv)=>{
      let total=0
      for(var key in inv){
        total+=inv[key]
      }
      return total
    }
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=> change("books",inv.books+1)}>+</button>
        <button className="circlularButton" onClick={()=>change("books",inv.books-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=> change("notebooks",inv.notebooks+1)}>+</button>
        <button className="circlularButton" onClick={()=> change("notebooks",inv.notebooks-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=> change("pens",inv.pens+1)}>+</button>
        <button className="circlularButton" onClick={()=> change("pens",inv.pens-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=> change("inkpens",inv.inkpens+1)}>+</button>
        <button className="circlularButton" onClick={()=> change("inkpens",inv.inkpens-1)}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {total(inv)}
    </div>
  );
};
