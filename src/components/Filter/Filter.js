import React, { Component } from "react";

export default class Filter extends Component {
  state = {
    name: "",
    lastname: "",
    age: "",
    man: false,
    fem: false,
  };

  handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) this.props.filter(this.state);
    if (prevState.man !== this.state.man)
      this.setState((prev) => (prev.fem = false));
    if (prevState.fem !== this.state.fem)
      this.setState((prev) => (prev.man = false));
  }

  render() {
    const { name, lastname, age, man, fem } = this.state;
    return (
      <div>
        <form>
          <label>
            Ім'я
            <input
              value={name}
              name="name"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Прізвище
            <input
              value={lastname}
              name="lastname"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Вік
            <input
              value={age}
              name="age"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <div>
            <span> Стать</span>
            <label>
              ч
              <input
                name="man"
                type="checkbox"
                checked={man}
                onChange={this.handleChange}
              />
            </label>
            <label>
              ж
              <input
                name="fem"
                type="checkbox"
                checked={fem}
                onChange={this.handleChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
