import React, { useState } from "react";
import { connect } from "react-redux";
import { addCv } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    cv: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCv: (obj) => dispatch(addCv(obj)),
  };
};




const Add = (props) => {




  const [input, setInputs] = useState({ email: '', name: '', phone: '' })

  const handleChange = (e) => {
    const value = e.target.value;
    setInputs({
      ...input,
      [e.target.name]: value
    });
  }

  // const add = () => {
  //   if (input === "") {
  //     alert("Input is Empty");
  //   } else {
  //     props.addCv({
  //       id: Math.floor(Math.random() * 1000),
  //       item: todo,
  //       completed: false,
  //     });
  //     setInputs("");
  //   }
  // };


  const handlesubmit = (e) => {
    e.preventDefault()
    if (input.name === "" || input.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.addCv(input);
    setInputs({ name: "", email: "" });
    props.history.push('/view')
  }


  return <div className="row justify-content-center">
    <div className="col-md-7">
      <h2>Add contact</h2>
      <form className="card p-3" onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            value={input.email || ""}
            onChange={handleChange}
            type="email"
            className="form-control"
            placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Names</label>
          <input
            name="name"
            onChange={handleChange}
            value={input.name || ""}
            type="text"
            className="form-control"
            id="name"
            placeholder="Names" />
        </div>
        <div className="form-group">
          <label htmlFor="number">TEl</label>
          <input
            name="phone"
            onChange={handleChange}
            value={input.phone || ""}
            type="number"
            className="form-control"
            id="number"
            placeholder="Phone Numbers" />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  </div>
};

export default connect(mapStateToProps, mapDispatchToProps)(Add)
