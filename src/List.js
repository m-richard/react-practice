import React from 'react';
import ListItems from './ListItems';

let List = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },

  addItem: function(e){
    let itemArray = this.state.items;

    itemArray.push (
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );

  // deleteItem: function() {
  //   let itemArray = this.state.items;
  //
  //   itemArray.pop (
  //
  //   )
  // }

    this.setState({
      items: itemArray
    });

    this._inputElement.value = " ";

    e.preventDefault();

  },
  render: function() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="enter task">
              </input>
              <button type="submit">add</button>
            </form>
          </div>
          <ListItems entries={this.state.items}/>
        </div>
      );
    }
});

export default List;
