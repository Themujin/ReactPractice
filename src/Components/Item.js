function Item(props) {
  return (
    <div className="item">
      <span className="item__id">{props.id}</span>
      <h4 className="item__title">{props.title}</h4>
    </div>
  );
}

export default Item;
