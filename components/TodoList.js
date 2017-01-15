
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => {
                this.props.onTodoClick(todo.id)
              }}
            />
          )
        })}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: React.Proptypes.func.isRequired
}

export default TodoList
