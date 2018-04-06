import React, { Component } from 'react';
import './App.css';

import ToDoItem from './ToDoItem/ToDoItem';

let addID = '1';

class App extends Component {

  state = {
    itemList: [
      {id: '01', itemTitle: 'This is Sample To Do Item'}
    ],
    todoItem: ''
}

textInputChanged = (event) => {
    const changedName = event.target.value;
    this.setState( {todoItem: changedName} );
}

addButtonClicked = () => {
  addID += '1';
  console.log(addID);
  this.state.itemList.push({id: addID, itemTitle: this.state.todoItem});

  // Clear the input field 
  this.setState({todoItem: ''});
}

checkedItem = (personIndex) => {
  const refItemList = [...this.state.itemList];
  refItemList.splice(personIndex, 1);
  this.setState({itemList: refItemList});
}

  render() {
    let listOfItems = (
      <div>
        {/* FILTER THE TODO ITEMS */}
        {this.state.itemList.filter( todoItem =>
          todoItem.itemTitle.toLowerCase().includes(
            this.state.todoItem.toLowerCase()
          )
          // MAP AND RENDER EVERY FILTERED ITEM
        ).map((item, index) => {
          return <ToDoItem
            click={() => this.checkedItem(index)}
            title={item.itemTitle} 
            key={item.id}
            changed={(event) => this.nameChangedHandler(event, item.id)} />
        })}
      </div>
    );

    return (
      <div className="App">
            <div className='TodoInputArea'>
                <input type='text' onChange={this.textInputChanged} value={this.state.todoItem}/>
                <button onClick={this.addButtonClicked}>
                    Add
                </button>
            </div>
        {listOfItems}
      </div>
    );
  }
}

export default App;
