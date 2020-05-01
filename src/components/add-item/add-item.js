import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label)
    this.setState({
      label:''
    })
  };

  render () {
    return (
      <form className='add-item'
            onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control d-flex"
          onChange={this.onLabelChange}
          placeholder="Hey Brain. What do you want to do tonight?"
          value={this.state.label}
        />
        <button
          className='btn btn-outline-secondary'>
          Add item
        </button>
      </form>
    )
  }
}
