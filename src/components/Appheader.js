import React, { Component } from 'react';
import Search from './Search';

class Appheader extends Component {
  render() {
    return (
      <div className="container">
        <div className="row d-flex align-items-center app-header pl-1">
          <div className="col-md-3 col-12">
            Movie Catalog
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center">
            <Search/>
          </div>
          <div className="col-md-3 col-12 d-flex justify-content-end">
            Welcome User!
          </div>
        </div>
      </div>
    );
  }
}

export default Appheader;
