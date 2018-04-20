import React, { Component } from "react";
import { connect } from 'react-redux';
// import OrderTotal from '../OrderTotal/OrderTotal.js'

const mapStateToProps = reduxState => ({
    reduxState,
});

class Checkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            newOrder: {
                name: '',
                total: ''
            }
        }

    }//end constructor
    result = () => {
        let totalCost = 0;
        // this.props.reduxState.pizzaOrder[i].cost
        for (let i = 0; i < this.props.reduxState.pizzaOrder.length; i++) {
            const element = this.props.reduxState.pizzaOrder[i].cost;
            totalCost += element;
        } return totalCost;
    }
    componentDidMount() {
        this.result();
    }

    render() {

        let currentCheckoutInfo = this.props.reduxState.pizzaOrder.map((pizzaItem)=>{
            return( 
                <tr key={pizzaItem.name}>
                    <td>{pizzaItem.name}</td>
                    <td>{pizzaItem.quantity}</td>
                    <td>{pizzaItem.cost}</td>
                </tr>
            )
        })



        return (
        <div>
            <form onSubmit={this.addNewOrder}>
                <input type='text' placeholder='Name' value={this.state.newOrder.name} onChange={this.handleNameChange} />
            <table>
                <thead>
                    <tr>
                        <th>Pizza Name</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCheckoutInfo}
                </tbody>
            </table>
            <p>Total Cost: {this.result()}</p>
            <button> Submit Order </button>
            </form>
        </div>
        )

    }//end render
}//end class

export default connect(mapStateToProps)(Checkout);
