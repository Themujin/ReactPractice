import Item from "./Components/Item.js";
import { useState } from "react";

//const [myList, setmyList] = useState([]);
const List = (props) => {
  const updateDelItem = (delItem) => {
    props.RemoveTask(delItem);
  };

  const myList = props.task.map((item) => (
    <Item
      updateDelItem={updateDelItem}
      key={item.id}
      id={item.id}
      title={item.Task}
      category={item.Application}
    ></Item>
  ));
  return myList;
};

export default List;
