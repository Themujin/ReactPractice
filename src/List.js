import Item from "./Components/Item.js";
const List = (props) => {
  const myList = props.task.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      title={item.Task}
      category={item.Application}
    >
      {item}
    </Item>
  ));

  return myList;
};

export default List;
