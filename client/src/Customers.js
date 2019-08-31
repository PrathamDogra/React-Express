import React, { Component } from "react";
import "./App.css";

class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: []
    };
  }
  componentDidMount() {
    fetch("/api/customers")
      .then(res => res.json())
      .then(customers =>
        this.setState({ customers }, () => console.log(customers))
      );
  }

  render() {
    return (
      <div>
        <h3>Customers</h3>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>{customer.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
