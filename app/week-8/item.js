function Item({ item, onSelect }) {
    return (
        <li onClick={() => onSelect(item)}>
            {item}
        </li>
    );
}

export default Item;