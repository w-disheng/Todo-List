import React, { Component } from 'react'
import PropTyes from 'prop-types'

class TodoItem extends Component {

    static propTypes = {
        index: PropTyes.number,
        item:  PropTyes.oneOfType([PropTyes.string, PropTyes.number]),
        deleteItem: PropTyes.func,
        test: PropTyes.string.isRequired
    }
    
    static defaultProps = {
        test: "Today "
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.item !== this.props.item) {
            return true
        } else {
            return false;
        }
    }

    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { item, test } = this.props
        console.log("child Render")
        return (
            <div className="list">
                <li>{test} - {item}</li>
                <button onClick={this.handleClick}>X</button>
            </div>
        )
    }

    handleClick = () => {
        const { index, deleteItem } = this.props
        deleteItem(index)
    }
}

export default TodoItem