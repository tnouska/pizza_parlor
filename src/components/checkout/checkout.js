import React, { Component } from "react";
import { connect } from 'react-redux';

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

    componentDidMount(){
        
    }

    render() {
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            {/* submit order is post to DB - submit action */}
            <button> Submit Order </button>
            </form>
        </div>
        )

    }//end render
}//end class

export default connect(mapStateToProps)(Checkout);
