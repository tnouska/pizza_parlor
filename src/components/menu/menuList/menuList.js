import React, { Component } from "react";
import { connect } from 'react-redux';
import MenuListItem from './menuListItem.js'

const mapStateToProps = reduxState => ({
    reduxState,
});

class MenuList extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_PIZZA'
        })
    }

    render() {

        //map out pizza
        let allPizzaItems = this.props.reduxState.pizzaList.map((pizza) => {
            return <MenuListItem key={pizza.id} pizza={pizza} />
        })
        return (
            
            <div> {JSON.stringify(this.props.reduxState.pizzaOrder)}
            {allPizzaItems} </div>
        )
    }//end render

}//end class

export default connect(mapStateToProps)(MenuList);