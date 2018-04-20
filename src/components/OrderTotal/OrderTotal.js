import React, { Component } from "react";
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class OrderTotal extends Component{

    render() {
        return 
            //total order will go here
    }

}//end class

export default connect(mapStateToProps)(OrderTotal);