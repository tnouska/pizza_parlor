import React, { Component } from "react";
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

const pizzaList = [
    { id: 1, name: 'Splat of Marinara', 
        description: "Cheeseless pizza with marinara, garlic and red peppers.", cost: 12.99},
    { id: 2, name: 'Onamonapizza', 
        description: "Cheese, BBQ sauce and artichokes.", cost: 14.99},
    { id: 3, name: 'Chinese Firedragon', 
        description: "Pepperoni, pineapple and banana peppers.", cost:15.99 }
];

class Menu extends Component {
    // componentDidMount() {
    //     this.props.dispatch({
    //         type: 'FETCH_PIZZA'
    //     })
    // }

    render(){

        //map out pizza
        let allPizzaItems = pizzaList.map((pizza)=>{
            return <div key={pizza.id}>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <h4>${pizza.cost}</h4>
                </div>
        })
        return (
        <div> {allPizzaItems} </div>
        )
}//end render

}//end class

export default connect(mapStateToProps)(Menu);