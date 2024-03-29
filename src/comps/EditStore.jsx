import React, { Component } from 'react';
import StoreForm from './StoreForm';
import { Link } from 'react-router-dom';
import controllable from 'react-controllables';
import PropTypes from 'prop-types';

class EditStore extends Component {
  static propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  };

  handleEscape = e => {
    // escape key
    if (e.keyCode === 27) {
      this.goHome();
    }
  };

  render() {
    const { value, onChange, match: { params: { store } }, onSave } = this.props;

    return (
      <div ref="container" className="container-fluid" onKeyDown={this.handleEscape}>
        <h2 className="page-header">Edit: <em>{store}</em></h2>

        <StoreForm value={value} onChange={onChange}/>

        <hr />

        <div className="text-center">
          <Link className="btn btn-warning" style={{ marginRight: 10 }} to="/">
            <i className="fa fa-chevron-left"/> Cancel
          </Link>
          <button className="btn btn-success" onClick={e => onSave(value)}>
            <i className="fa fa-save"/> Save
          </button>
        </div>
      </div>
    );
  }
}

export default controllable(EditStore, [ 'value' ]);