const GroceryListItem = (props) => {

  const [isDone, setIsDone] = React.useState('normal');

  const style = {
    fontWeight: isDone
  };

  return (
    <li style={style} onMouseOver={() => setIsDone('bold')}>
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