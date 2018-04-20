import React, { Component } from "react";
import { connect } from 'react-redux';
import './menu.css';
import MenuList from './menuList/menuList.js';
import OrderTotal from '../OrderTotal/OrderTotal.js'

const mapStateToProps = reduxState => ({
    reduxState,
});


class Menu extends Component {

    render(){
        return (
            <MenuList />
        )
}//end render

}//end class

export default connect(mapStateToProps)(Menu);