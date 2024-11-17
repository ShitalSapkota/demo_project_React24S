import { useState } from "react";
import Button from "./components/Button";

function Card({ firstname, lastname, title, age, animal, click }) {
  const [isEdit, setEdit] = useState(false);
  const [ini_animal, setAnimal] = useState(animal);
  const changeValue = () => setEdit((prev) => !prev);

  const saveValue = (e) => setAnimal(e.target.value);

  // destructuring props
  return (
    <div className="card">
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname} </p>
      <p>Title: {title}</p>
      <p>Age: {age} </p>
      <p>
        Animal:
        {isEdit ? (
          <input type="text" value={ini_animal} onChange={saveValue} />
        ) : (
          ini_animal
        )}
      </p>
      <Button text="Click me" click={click} />
      <Button text={isEdit ? "Save" : "Edit"} click={changeValue} />
    </div>
  ); // click props -> from Card components passing into Button components
}

export default Card;
