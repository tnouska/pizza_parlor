import React, { Component } from "react";
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import { AddCircle, RemoveCircle } from 'material-ui-icons';

const mapStateToProps = reduxState => ({
    reduxState,
});

class MenuList extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_PIZZA'
        })
    }

    addOnePizza = () =>{
        const addPizza = this.props.reduxState.updateQuantity +1;
        this.props.dispatch({
            type: "UPDATE_QUANTITY",
            payload: addPizza
        })
    }

    deleteOnePizza = () => {
        const deletePizza = this.props.reduxState.updateQuantity - 1;
        this.props.dispatch({
            type: "UPDATE_QUANTITY",
            payload: deletePizza
        })
    }

    render() {

        //map out pizza
        let allPizzaItems = this.props.reduxState.pizzaList.map((pizza) => {
            return <div className="pizzaDiv" key={pizza.id}>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <h4>${pizza.cost}</h4>
               <IconButton size="small" color="secondary" onClick={this.addOnePizza}><AddCircle /></IconButton>
                {this.props.reduxState.updateQuantity}
                <IconButton size="small" color="secondary" onClick={this.deleteOnePizza}><RemoveCircle /></IconButton>
            </div>
        })
        return (
            <div> {allPizzaItems} </div>
        )
    }//end render

}//end class

export default connect(mapStateToProps)(MenuList);