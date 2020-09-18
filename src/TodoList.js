import React, { Component, createRef } from 'react';
import axios from 'axios'

import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
      list: []
    }
    this.inputRef = createRef()
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
         .then( (res) => {
           const task = res.data.map( (task) => {
             return (
               task.title
             )
           })
           this.setState( () => ({
             list: [...task]
           })) 
         })
  }

  
  render() {
    const { inputVal } = this.state;
    return (
        <>
          <div>
              <label htmlFor="insertInput" >输入: </label>
              <input id="insertInput" ref={this.inputRef} value={inputVal} onChange={this.handleInputChange} />
              <button onClick={this.handleBtnClick} >提交</button>
          </div>
          <ul>
            {this.getTodoItem()}
          </ul>
        </>
      );
  }

  getTodoItem = () => {
    const { list } = this.state
    return (
      list.map( (todoItem, index) => 
      <TodoItem
        key={todoItem}
        index={index} 
        item={todoItem}
        deleteItem={() => this.handleBtnDelete(index)}
      />
    )
  )
  }

  handleInputChange = (e) => {
    const { value } = e.target
    this.setState( () => ({
      inputVal: value
    }))
  }

  handleBtnClick = () => {
    this.setState( (prevState) => ({
      list: [...prevState.list, prevState.inputVal],
      inputVal: ''
    }))
  }

  handleBtnDelete = (index) => {
    this.setState( (prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }


}

export default TodoList;
 