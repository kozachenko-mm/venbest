import React, { Component } from "react";
import styles from "./Filter.module.css";

const initialState = {
  name: "",
  lastname: "",
  age: "",
  man: false,
  fem: false,
};

export default class Filter extends Component {
  state = initialState;

  handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    name === "age"
      ? this.setState({
          [name]: value.replace(/\D/, ""),
        })
      : this.setState({
          [name]: value,
        });
  };

  cleanFilter = () => {
    this.setState((state) => (state = initialState));
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
      <div className={styles.filter}>
        <p className={styles.title}>Застосувати фільтри</p>
        <form className={styles.form}>
          <div className={styles.group}>
            <input
              className={styles.input}
              value={name}
              name="name"
              type="text"
              onChange={this.handleChange}
            />
            <span className={styles.bar}></span>
            <label className={styles.label}>Ім'я:</label>
          </div>
          <div className={styles.group}>
            <input
              className={styles.input}
              value={lastname}
              name="lastname"
              type="text"
              onChange={this.handleChange}
            />
            <span className={styles.bar}></span>
            <label className={styles.label}>Прізвище:</label>
          </div>
          <div className={styles.group}>
            <input
              className={styles.input}
              value={age}
              name="age"
              type="text"
              onChange={this.handleChange}
            />
            <span className={styles.bar}></span>
            <label className={styles.label}>Вік</label>
          </div>
          <div className={styles.sex}>
            <span> Стать: </span>
            <div>
              <label>
                ч
                <input
                  className={styles.checkbox}
                  name="man"
                  type="checkbox"
                  checked={man}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                ж
                <input
                  className={styles.checkbox}
                  name="fem"
                  type="checkbox"
                  checked={fem}
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>
          <input
            type="button"
            value="Скинути фільтри"
            className={styles.button}
            onClick={this.cleanFilter}
          />
        </form>
      </div>
    );
  }
}
