import React, { useState } from 'react'
import ToDoList from './ToDoList';


const App = () => {
    const [input,setInput] = useState("");
    const [arr,setArr] = useState([]);


    const aToDo=(event)=>{
        setInput(()=>{
            return event.target.value;
        });
    }

    const addToDo=()=>{
        setArr((oldArr)=>{
            return [...oldArr,input]
        });

        setInput("");
    };

    const deleteItem = (id) =>{
        setArr((oldItems)=>{
            return oldItems.filter((elements,index)=>{
                return index !== id;
            });
        });
    }

  return (
    <>
        <div className='main_div'>
            <div className='center_div'>

                <h1>ToDoList</h1>
                <br></br>
                <input type='text' value={input} placeholder='Enter a todo...' onChange={aToDo} ></input>
                <button onClick={addToDo}>+</button>
                <br></br>

                <ol>
                    {
                        arr.map((items,index)=>{
                            return <ToDoList text={items}
                                id={index}
                                onSelect={deleteItem}
                            />;
                        })
                    }
                </ol>
            </div>
        </div>
    </>
  )


  
}

export default App