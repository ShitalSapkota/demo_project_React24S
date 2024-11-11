function Card(props) {
  return (
    <div className="card">
      <p>Firstname: {props.firstname}</p>
      <p>Lastname: {props.lastname} </p>
      <p>Title: {props.title}</p>
      <p>Age: {props.age} </p>
      <p>Animal: {props.animal} </p>
    </div>
  );
}

export default Card;
