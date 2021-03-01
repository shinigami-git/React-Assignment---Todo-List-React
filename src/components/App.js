// import React , {useState} from "react";
// import "./../styles/App.css";
// import AddTodo from "./AddTodo/AddTodo";
// import TodoContainer from "./TodoContainer/TodoContainer";

// function App() 
// {
// 	const [todoListValues, setTodoListValues] = useState([]);
// 	return (
// 	<div id="main">
// 		<AddTodo todoListValues={todoListValues} setTodoListValues={setTodoListValues} />
// 		<TodoContainer todoListValues={todoListValues} setTodoListValues={setTodoListValues} />
// 	</div>
// 	);
// }


// export default App;

import React,{useState} from "react";
import "./../styles/App.css";

function App() 
{const [text, setText] = useState("");
  const [textArray, settextArray] = useState([]);
  const [edit, setEdit] = useState(false);
  const [savetext, setsavetext] = useState("");
  const [customid, setid] = useState();
  const handleButton = () => {
    let obj = {};
    
      obj.para = text;
      let copyArray = textArray.slice();
      copyArray.push(obj);
      settextArray(copyArray);
     
    
     setText("");
  };
  const handleDelete = (id) => {
    const arr = textArray.slice();
    const filteredArray = arr.filter((item, index) => index !==id);
    settextArray(filteredArray);
  };
  const handleSave = (id) => {
    if (savetext !== "") {
      let copyarr = textArray.slice();
      copyarr[id].para = savetext;
      settextArray(copyarr);
      setEdit(false);
    }
  };
  return (
    <div id="main" className="main">
      <textarea
        id="task"
        value={text}
        rows="1"
        cols="20"
        type="text"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button id="btn" onClick={text?handleButton:null}>
        Add todo
      </button>
      {textArray.map((item, index) => (
        <div className="list" key={index}>
          <p>{item.para}</p>
          <span>
            <button
              className="edit"
              onClick={(event) => {
                setEdit(true);
                setid(index);
              }}
            >
              edit
            </button>
          </span>
          <span>
            <button className="delete" onClick={(event) => handleDelete(index)}>
              delete
            </button>
          </span>
        </div>
      ))}
      {edit && (
        <>
          <textarea className="editTask" onChange={(e) => setsavetext(e.target.value)}></textarea>
          <button className="saveTask" onClick={(event) => handleSave(customid)}>save</button>
        </>
      )}
    </div>
  );
}


export default App;
