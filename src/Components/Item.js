import { useState } from "react";
function Item(props) {
  const [delItem, setdelItem] = useState("");
  const handleClick = (e) => {
    e.stopPropagation();

    setdelItem(e.currentTarget.id);

    
    props.updateDelItem(delItem);


  };
  return (
    <div className="item">
      <span className="item__id">{props.id}</span>
      <h4 className="item__title">{props.title}</h4>
      <h6 className="item__category">{props.category}</h6>
      <button type="button" id={props.id} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default Item;
