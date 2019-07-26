import React, { Component } from 'react';

class Imgpanel extends Component {
  render() {
    return (      
        <div className="col-md-2 col-12 border border-secondary p-2 m-1">
          <img src={this.props.imgObj.Poster} className="img-fluid" alt="Poster"/>
          <div>Name: {this.props.imgObj.Title}</div>
          <div>Year: {this.props.imgObj.Year}</div>
          <div>imdbID: {this.props.imgObj.imdbID}</div>
          <div>Type: {this.props.imgObj.Type}</div>
        </div>
    );
  }
}

export default Imgpanel;
