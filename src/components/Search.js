import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadItems} from '../actions/movies';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchVal:''
        };
        this.handleChange = this.handleChange.bind(this);
        /* this.onKeyUp = this.onKeyUp.bind(this); */
    }
    handleChange(event){
        this.setState({
            searchVal : event.target.value
        },()=>{
            this.props.actions.loadItems(this.state.searchVal,1);
        })
        
    }
    /* onKeyUp(event){
        if(event.keyCode===13){
            this.props.actions.loadItems(this.state.searchVal,1);
        }
    } */

  render() {
    return (
        <div className="form-group">
            <input type="text" value={this.state.searchVal} onChange={this.handleChange} className="form-control form-control-sm"/>
        </div>
    );
  }
}

const mapDispatchToPros = (dispatch) => {
    return {
        actions: bindActionCreators({ loadItems }, dispatch)
    }
}

export default connect(null,mapDispatchToPros)(Search);
