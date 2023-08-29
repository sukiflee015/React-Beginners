function ListGroup() {
  return (
    <div className="list-group">
      <button
        type="button"
        className="list-group-item list-group-item-action active"
        aria-current="true"
      >
        The current button
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        A second item
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        A third button item
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        A fourth button item
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action"
        disabled
      >
        A disabled button item
      </button>
    </div>
  );
}

export default ListGroup;
