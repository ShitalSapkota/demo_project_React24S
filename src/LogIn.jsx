function LogIn() {
  return (
    <Card
      key={person.id}
      // key should be provided always when using list/array for dynamic value
      firstname={person.firstname}
      lastname={person.lastname}
      title={person.title}
      age={person.age}
      animal={person.animal}
    />
  );
}

export default LogIn;
