import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos : PropTypes.array,
    onTodoCLick : PropTypes.func,

};
TodoList.defaultProps = {
    todos : [],
    onTodoCLick : null,
    
};

function TodoList(props) {
    console.log(props.todos);
    const {todos,onTodoCLick} = props;
    console.log(todos.map(todo => todo.title));

    function handlClick(todo){
        if(onTodoCLick){
            onTodoCLick(todo)
        }
    }

    return (
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} onClick={() => handlClick(todo)}>{todo.title}</li>
                ))}
            </ul>
    );
}

export default TodoList;