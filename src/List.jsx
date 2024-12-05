import PropTypes from "prop-types";

function List(props) {
  const itemList = props.items;

  itemList.sort((a, b) => a.name.localeCompare(b.name));

  const listitems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <div className="list-styling">
        <h2>{props.category}</h2>
        <ol>{listitems}</ol>
      </div>
    </>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
    }),
  ),
  category: PropTypes.string,
};

export default List;
