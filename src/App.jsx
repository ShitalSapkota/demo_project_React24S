import "./App.css";
import Card from "./Card";
import personsData from "./personsData";
import { useState } from "react";
import Button from "./components/Button";

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
    setIsLoggedIn((prev) => !prev); // can be use : prev or prevSate  -> previous state
  };

  const handleClick = (id) => {
    console.log("I was Clicked", id);
  };

  return (
    <>
      <header>
        <h1>Person Data</h1>
        <Button
          text={isLoggedIn ? "Log Out" : "Log In"}
          click={clickHandler} // click is props atrributes so in Button.jsx it is used as a event handling
        />
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
                click={() => handleClick(person.id)} // passing click event handling through Card components
              />
            </div>
          ))
        ) : (
          <div>
            <p>Please Log in to see the list</p>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
