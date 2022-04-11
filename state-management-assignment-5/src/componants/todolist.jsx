import './todolist.css'

export const Todolist=({data,change})=>{

   
    return (
        <div className='todolist'>
          {data.map((e)=>{
          return <div className='append'>
              <h3>{e.title}</h3>
              <h3>{e.flag ? "Done":"Not Done"}</h3>
              <button onClick={()=>change(e.id)} className="outside"><div className="inside"></div></button>
              </div>
        })}
        </div>
    )
}