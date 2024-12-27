function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 75 },
    { id: 2, name: "orange", calories: 50 },
    { id: 3, name: "banana", calories: 120 },
    { id: 4, name: "strawberry", calories: 60 },
    { id: 5, name: "pinapple", calories: 38 },
  ];

  //fruits.sort((a, b) => a.name.localeCompare(b.name));
  fruits.sort((a, b) => b.calories - a.calories);

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          {fruit.name}: &nbsp; <b>{fruit.calories}</b>
        </li>
      ))}
    </ul>
  );
}

export default List;
