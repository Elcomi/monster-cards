import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/card-list/card-list.component";
import { SearchBox } from "./Components/search-box/search-box.component";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monter Rolodex </h1>
        <SearchBox
          placeholder="search monster"
          handleOnChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}
export default App;
