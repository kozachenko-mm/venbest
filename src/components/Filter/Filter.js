// import React from 'react';

// const Filter = ({form, updateField}) => {
//     // const [inputValue, setInputValue] = useState('')
//     // const [form, setForm] = useState({
//     //     name: '',
//     //     lastname: '',
//     //     age: ''
//     //   });
//     //   const updateField = ({target}) => {
//     //     setForm({
//     //       ...form,
//     //       [target.name]: target.value
//     //     });
//     //   };
//     return (
//         <div>
//             {/* <h1>Застосувати фільтр</h1> */}
//             <input
//           value={form.name}
//           name="name"
//           type='text'
//           onChange={updateField}
//         />      
//         <input
//           value={form.lastname}
//           name="lastname"
//           type="text"
//           onChange={updateField}
//         />
//          <input
//           value={form.age}
//           name="age"
//           type="number"
//           onChange={updateField}
//         />
//         </div>
//     );
// };

// export default Filter;

import React, { Component } from 'react'

export default class Filter extends Component {
    state = {
        name: '',
        lastname: '',
        age: ''
    }
    
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
        this.props.search(this.state)
    }
}


    render() {
        console.log(this.state)
        const {name, lastname, age} = this.state
        return (
            <div>
                 {/* <h1>Застосувати фільтр</h1> */}
           <input
          value={name}
          name="name"
          type='text'
          onChange={this.handleChange}
        />      
        <input
          value={lastname}
          name="lastname"
          type="text"
          onChange={this.handleChange}
        />
         <input
          value={age}
          name="age"
          type="text"
          onChange={this.handleChange}
        />
            </div>
        )
    }
}

