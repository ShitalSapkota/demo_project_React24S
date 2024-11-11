import "./App.css";
import Card from "./Card";
import personsData from "./personsData";
import { useState } from "react";

//Examples

// function Welcome(props) {
//   return (
//     <h1>Hello, {props.name}</h1>
//   )
// }

// const Welcome = (props) => {
//   return (
//     <h1>Hello, {props.name}</h1>
//   )
// }

// old way to use class components

/* class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
} */

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clickHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <header>
        <h1>Person Data</h1>
      </header>
      <main>
        {isLoggedIn ? (
          personsData.map((person) => (
            <div>
              <Card
                key={person.id}
                // key should be provided always when using list/array for dynamic value
                firstname={person.firstname}
                lastname={person.lastname}
                title={person.title}
                age={person.age}
                animal={person.animal}
              />
              <button onClick={clickHandler}>Log Out</button>
            </div>
          ))
        ) : (
          <div>
            <p>Please Log in to see the list</p>
            <button onClick={clickHandler}>Log In</button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
