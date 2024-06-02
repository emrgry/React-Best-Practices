import React, {useState} from 'react'


//<------------------------------------------------------------------------------------------>

//<------------------------------------------------------------------------------------------>
const UseStateBP = () => {
  const [age, setAge] = useState(42);

  function increment() {
    // if you write setAge(age + 1) it will not work you have to use a => a + 1 which is using updater function with previous state
    setAge(a => a + 1); 
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button onClick={() => {
        increment();
      }}>+1</button>
    </>
  );
}

export default UseStateBP



var Form = () => {
  const [form, setForm] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  return (
    <>
      <label>First name:
        <input value={form.firstName} onChange={e => {setForm({...form, firstName: e.target.value});}}/>
      </label>
      <label>Last name:<input value={form.lastName} onChange={e => { setForm({...form, lastName: e.target.value});}}/>
      </label>
      <label>Email:<input value={form.email} onChange={e => { setForm({...form, email: e.target.value});}}/>
      </label>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p>
    </>
  );
}
export var Form;



//<----------------------------------------Avoiding recreating the initial state -------------------------------------------------->
// Although the result of createInitialTodos() is only used for the initial render, you’re still 
//calling this function on every render.This can be wasteful if it’s creating large arrays or performing expensive calculations.

// Notice that you’re passing createInitialTodos, which is the function itself, and not createInitialTodos(), which is the result
// of calling it.If you pass a function to useState, React will only call it during initialization.
//<------------------------------------------------------------------------------------------>
function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1)
    });
  }
  return initialTodos;
}

var TodoList = () => {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={() => {setText('');
        setTodos([{
          id: todos.length,
          text: text
        }, ...todos]);
      }}>Add</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export var TodoList;



//<-------------------------------------------Resetting state with a key----------------------------------------------->
// You can reset a component’s state by passing a different key to a component. In this example, the Reset button changes 
// the version state variable, which we pass as a key to the Form.When the key changes, React re - creates the Form 
// component(and all of its children) from scratch, so its state gets reset.
//<------------------------------------------------------------------------------------------>

var App = () => {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form2 key={version} />
    </>
  );
}

function Form2() {
  const [name, setName] = useState('Taylor');

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Hello, {name}.</p>
    </>
  );
} 

export var App



//<----------------------------------------Storing information from previous renders -------------------------------------------------->
// Usually, you will update state in event handlers. However, in rare cases you might want to adjust state in response to rendering — 
// for example, you might want to change a state variable when a prop changes.
//<------------------------------------------------------------------------------------------>


var CountLabel = ({ count }) => {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
  }
  return (
    <>
      <h1>{count}</h1>
      {trend && <p>The count is {trend}</p>}
    </>
  );
}

var App2 = () => { 
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <CountLabel count={count} />
    </>);
}

export var App2;
