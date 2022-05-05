import "./cart.css"

export const Cart=()=>{
    let data=JSON.parse(localStorage.getItem("cartData"))
    return <div className="MainDiv">
        {data.map((ele)=>{
        
        return <div className="data" >
               <img src={ele.image} />
               <p >{ele.title}</p>
               <p>Price:₹ {ele.price}</p>
             
            </div>
    
        })}
        </div>
}