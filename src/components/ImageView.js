import React, { Component } from 'react';

import Imgpanel from './Imgpanel';
import Pagination from "react-js-pagination";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadItems} from '../actions/movies';

class ImageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 1
        };
        this.renderImagePanels = this.renderImagePanels.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.renderSearchResult = this.renderSearchResult.bind(this);
    }
     
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        this.props.actions.loadItems(this.props.searchResp.value,pageNumber);
    }

    renderImagePanels(){
        return this.props.movieRes.map( (value,key)=>{
            return (<Imgpanel key={key} imgObj={value}/>);
        } )
    }

    renderSearchResult(){
        if(this.props.movieRes.length>0){
            console.log(this.props.requestStatus);
            return( <React.Fragment>
             <div className="row mt-3 mb-2">
                You searched for: {this.props.searchResp.value}, {this.props.searchResp.totalResult} results found
                </div>
                <div className="row d-flex justify-content-center">
                {this.renderImagePanels()}
                </div>
                <div className="row d-flex justify-content-center mt-3 mb-2">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={this.props.searchResp.totalResult}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
            </div>
            </React.Fragment>)
        }else{
            let msg = this.props.requestStatus.message || 'Welcome, Search for movies';
            return(<div>{this.props.requestStatus.message}</div>);
        }
    }
    
    render() {
        return (
        <div className="container">
            {this.renderSearchResult()}
        </div>
        );
    }
}
const mapStateToProps = state => ({
    movieRes: state.movie || [],
    searchResp : state.search,
    requestStatus : state.requestStatus
})

const mapDispatchToPros = (dispatch) => {
    return {
        actions: bindActionCreators({ loadItems }, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToPros)(ImageView);
