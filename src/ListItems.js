import React from 'react';

let ListItems = React.createClass({
  render: function(){
    let listEntries = this.props.entries;

    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }

    let listElements = listEntries.map(createTasks);

    return (
      <ul className='theList'>
      {listElements}
      </ul>
    );
  }
});

export default ListItems;
