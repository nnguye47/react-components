const GroceryListItem = (props) => {

  const [isDone, setIsDone] = React.useState(false);

  const style = {
    fontWeight: isDone ? 'bold' : 'normal',
  };

  return (
    <li style={style} onMouseOver={() => setIsDone(!isDone)}>
      {props.toBuy}
    </li>
  );
};

const GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem toBuy={item} />
    ))}
  </ul>
);

const Cucumbers = () => (
  <li>
    Cucumbers
  </li>
)

const Kale = () => (
  <li>
    Kale
  </li>
)
const App = () => (
    <div>
      <h1>Shopping List</h1>
      <GroceryList items={[<Cucumbers />, <Kale />]}/>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));