import React, { Component } from "react";
import { connect } from 'react-redux';
import OrderTotal from '../OrderTotal/OrderTotal.js'

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


    render() {

        let currentCheckoutInfo = this.props.reduxState.ARRAYNAMETBD.map((pizzaItem)=>{
            let costofPizza = pizzaItem.quantity * pizzaItem.cost;
            return( 
                <tr>
                        <td>pizzaItem.name</td>
                        <td>pizzaItem.quantity</td>
                        <td>costofPizza</td>
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
            {/* < OrderTotal /> */}
            <button> Submit Order </button>
            </form>
        </div>
        )

    }//end render
}//end class

export default connect(mapStateToProps)(Checkout);
