//Intro
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);

//React Components
//Class component
class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }

//Function component
function Car() {
    return <h2>Hi, I am a Car!</h2>;
}

//Rendering a component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

//Props
function Car(props) {
    return <h2>I am a {props.color} Car!</h2>;
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);

//Components in components
function Car() {
    return <h2>I am a Car!</h2>;
  }
  
function Garage() {
return (
    <>
    <h1>Who lives in my Garage?</h1>
    <Car />
    </>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

//components in files
function Car() {
 return <h2>Hi, I am a Car!</h2>;
}
  
export default Car;

//React Hooks
//Hooks allow us to "hook" into React features such as state and lifecycle methods.
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);

//useEffect
//The useEffect Hook allows you to perform side effects in your components.
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

//useContext
//React Context is a way to manage state globally.
//It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);