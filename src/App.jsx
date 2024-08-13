import { useState } from 'react'

function App() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState('');
function add_list() {
  if(todo.trim() != ''){
    setList([...list, todo]);
    setTodo('');
    document.querySelector('.input').value = '';

  }

}
function remove_task(remove_i) {
  setList(list.filter((task,i)=>i!=remove_i));
}
  return (
    <div className='app'>
    <div >
      <input type="text" className='input' onChange={(e)=>setTodo(e.target.value)} />
      <input type="button" value="add" onClick={add_list} />
    </div>
    <div>
      <ul>
        {list.map((item, index) => (
          <><li key={index}>{item}</li>
          <div className="">
          <button onClick={()=>remove_task(index)}>✖</button>
          <button onClick={()=>remove_task(index)}>✔</button>
          </div><hr />
          </>
        ))}
      </ul>
      {/*       <p>Total items: {list.length}</p>
     <p>Completed items: {list.filter((item) => item.includes('completed')).length}</p>
      <p>Uncompleted items: {list.filter((item) =>!item.includes('completed')).length}</p>
      <input type="button" value="Mark as completed" onClick={() => setList(list.map((item) => item.includes('completed')? item.replace('completed', '') : item +'completed'))} />
      <input type="button" value="Delete completed items" onClick={() => setList(list.filter((item) =>!item.includes('completed')))} />
      <input type="button" value="Delete all items" onClick={() => setList([])}/> */}
    </div>
    </div>
  )
}

export default App
