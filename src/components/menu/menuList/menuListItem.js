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
            name: "",
            cost: 0
        }
    }//end constructor

    addOnePizza = () => {
        this.setState({
            id: this.props.pizza.id ,
            name: this.props.pizza.name,
            cost: this.props.pizza.cost
        })
        this.props.dispatch({
            type: "ADD_PIZZA",
            payload: this.state
        })
    }

    deleteOnePizza = () => {
        this.setState({
            id: this.props.pizza.id,
            name: this.props.pizza.name,
            cost: this.props.pizza.cost
        })
        this.props.dispatch({
            type: "DELETE_PIZZA",
            payload: this.state
        })
    }

    render() {

        return (
            <div className="pizzaDiv">
                {JSON.stringify(this.props.reduxState.pizzaOrder)}
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