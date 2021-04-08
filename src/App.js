import './App.scss';
import './components/ColorBox.scss';
import ColorBox from './components/ColorBox';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import PostFilltersForm from './components/PostFilltersForm';
import Clock from './components/Clock';
import MagicBox from './components/MagicBox';

function App() {

  const [todoList, setTodoList] = useState([
    {id:1,title:"title One"},
    {id:2,title:"title Two"},
    {id:3,title:"title Three"},
  ])
  const [postList, setPostList] = useState([])
  useEffect(() => {

      console.log("2");
    async function fetchPostList (){

      try {
        console.log("4");
        const requesturl = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(requesturl);
        console.log("llllll",response);
        const responseJSON = await response.json();
        console.log("ahihi",{responseJSON});

        const data = responseJSON.data

        const title = responseJSON;
        console.log(title);
        console.log("6");
        setPostList(responseJSON);
      } catch (error) {
        console.log('đã bị lỗi: ',error);
      }
    }
    fetchPostList();
  },[])
  // useEffect(() => {
  //   console.log("4");
  // });
  function handleTodoClick(todo){
    console.log(todo);
    let index = todoList.findIndex(x => x.id === todo.id);
    if(index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index,1); 
    return setTodoList(newTodoList);

  }
  function handleTodoFormSubmit(formValues){
    // console.log('Form submit:' + JSON.stringify(formValues)+formValues.title);
    console.log("From submit: ",formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList)
    return handleTodoClick;
  }
  function inputChange(textInput){
    console.log("show text input: ",textInput);
  }
  // console.log("kkkkkkk",postList);
  const [showClock, setShowClock] = useState(true);
  return (
    
    <div className="app">
      <h1>React Hook</h1>
      <MagicBox/>
      {/* {showClock && <Clock/>}
      <button onClick={() => setShowClock(false)}>Ẩn đồng hồ</button> */}
      {/* <PostFilltersForm onSubmit={inputChange}/>
      <PostList posts={postList}/> */}
      {/* <TodoForm onSubmit={(formValues) => handleTodoFormSubmit(formValues)}/>
      <TodoList todos={todoList} onTodoCLick={handleTodoClick}/> */}
    </div>
  );
  
}

export default App;
