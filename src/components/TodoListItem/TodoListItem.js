import React, { useState } from "react";
import "./style.css";

const TodoListItem = ({ listItem,index,todoListValues,setTodoListValues }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(listItem);
  const handleEdit=()=>{
      setIsEditing(true);
  }

  const handleDelete=()=>{
      let clonedArr=[...todoListValues];
      clonedArr.splice(index,1);
      setTodoListValues(clonedArr);
  }

  const changeText=(event)=>{
        setCurrentText(event.target.value);
  }

  const handleSave=()=>{
      
    if(currentText!=""){
    let clonedArr=[...todoListValues];
    clonedArr[index]=currentText;
    setTodoListValues(clonedArr);
    setIsEditing(false);    
}
    
  }


  if (isEditing) {
    return (
      <div className="added-task" >
        <textarea className="editTask" onChange={changeText} defaultValue={listItem}></textarea>
        <br />
        <button className="saveTask" onClick={handleSave}>Save</button>
      </div>
    );
  } else {
    return <div className="added-task" >
        <div className="todo-items">
        {listItem}
        </div>
        <div className="buttons">
        <button className="edit" onClick={handleEdit}>Edit</button>
        <button className="delete" onClick={handleDelete} >Delete</button>
        </div>
        </div>;
  }
};

export default TodoListItem;
