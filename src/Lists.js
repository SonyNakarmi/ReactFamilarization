function ListItems(props){
    return(
        <li>
            {props.value}
        </li>
    );
}

function Lists(props){
    const numbers = props.nums;
    const doubled = numbers.map((numbers) => numbers * 2);
    // keys help react itdentify which items have changed and normally should be unique ID or index
    // Better not to use index as a key for performance issues, component state issues and for changing order of items
    // A good rule of thumb is that elements inside the map() call need keys.
    // Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:
    const listItems = numbers.map(number =>
                <ListItems key={number.toString()}  value={number} />   
    );
    return(
        <div>
           <p>Doubled list: {doubled}</p>
           <hr/>
           <ul>{listItems}</ul>
        </div>
    );
}

export default Lists;