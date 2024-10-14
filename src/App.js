import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      this.setState({ users: data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  deleteBox = (userId) => {
    this.setState({
      users: this.state.users.filter(user => user.id !== userId)
    })
  }
  render() {
    return (
      <div className='container'>
        <h1 className='title'>User List</h1>
        <div className='general'>
          {this.state.users.map(user => (
            <div className='box' key={user.id}>
              <h2 className='name'>Name: {user.name}</h2>
              <h3 className='nameUser'>UserName: {user.username}</h3>
              <h4 className='phone'>Tel Number: {user.phone}</h4>
              <p>Company Name: {user.company.name}</p>
              <button
                className='box__btn'
                onClick={() => this.deleteBox(user.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;