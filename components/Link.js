
import React from 'react'

class Link extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    if(this.props.active) {
      return <span>{this.props.children}</span>
    }
    return (
      <a
        href='#'
        onClick={(e) => {
          e.preventDefault()
          this.props.onClick()
        }}
      >
        {this.props.children}
      </a>
    )
  }
}

Link.propTypes = {
  active: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default Link
