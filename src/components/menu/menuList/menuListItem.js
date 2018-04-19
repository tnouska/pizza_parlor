import React, { Component } from "react";
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import { AddCircle, RemoveCircle } from 'material-ui-icons';

const mapStateToProps = reduxState => ({
    reduxState,
});

class MenuListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: 0
        }
    }//end constructor

    addOnePizza = () => {
        // const addPizza = this.setState.quantity + 1;
        this.setState({
            name: this.props.pizza.name,
            quantity: this.state.quantity + 1
        })
        this.props.dispatch({
            type: "UPDATE_QUANTITY",
            payload: this.state
        })
    }

    deleteOnePizza = () => {
        // const deletePizza = this.setState.quantity - 1;
        this.setState({
            name: this.props.pizza.name,
            quantity: this.state.quantity - 1
        })
        this.props.dispatch({
            type: "UPDATE_QUANTITY",
            payload: this.state
        })

    }

    render() {

        return (
            <div className="pizzaDiv">
                <h3>{this.props.pizza.name}</h3>
                <p>{this.props.pizza.description}</p>
                <h4>${this.props.pizza.cost}</h4>
                <IconButton size="small" color="secondary" onClick={this.addOnePizza}><AddCircle /></IconButton>
                <span> {this.state.quantity}</span>
                <IconButton size="small" color="secondary" onClick={this.deleteOnePizza}><RemoveCircle /></IconButton>
            </div>
        )

    }//render
}//end class

export default connect(mapStateToProps)(MenuListItem);