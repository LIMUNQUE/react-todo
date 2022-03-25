import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
const onClickButton = (msg) => {
  alert("Aqui se debería abrir el modal");
  console.log(msg);
};
  return (
    <button onClick = {() => onClickButton("hi")} className = "CreateTodoButton">+</button>
  );
}

export { CreateTodoButton };