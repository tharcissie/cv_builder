import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const navigate = useNavigate();

  const [input, setInputs] = useState({ email: '', names: '', phone: '', linkedin: '', school: '', course: '', start: '', end: '', job: '', company: '', enter: '', leave: '', school1: '', course1: '', start1: '', end1: '', job1: '', company1: '', enter1: '', leave1: '', des1: '', des2: '', des3: '', des4: '', summary: '' })
  
  
  const handleChange = (e) => {
    const value = e.target.value;
    setInputs({
      ...input,
      [e.target.name]: value
    });
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    try {
      window.localStorage.setItem("cv", JSON.stringify({ input }))
    } catch (error) {
      console.log(error)
    }
    setInputs({ email: '', names: '', phone: '', linkedin: '', school: '', course: '', start: '', end: '', job: '', company: '', enter: '', leave: '', school1: '', course1: '', start1: '', end1: '', job1: '', company1: '', enter1: '', leave1: '', des1: '', des2: '', des3: '', des4: '', summary: '' });
    navigate('/view')
  }



  return (<div className="container mt-5">
    <div className="card mb-2 cv-title"><h1 className="text-center" style={{fontWeight: 900}}>CV BUILDER</h1></div>
    <div className="card p-4 mb-5">
      <form className="mt-5" onSubmit={handlesubmit}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h5>Personal Details</h5>
            <div className=" mt-2  p-2">
              <div className="form-group">
                <input
                  name="names"
                  value={input.names || ""}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter First and Last Name..." />
              </div>
              <div className="form-group">
                <input
                  name="phone"
                  value={input.phone || ""}
                  onChange={handleChange}
                  type="phone"
                  className="form-control"
                  placeholder="Enter Phone Number..." />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  value={input.email || ""}
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address..." />
              </div>
              <div className="form-group">
                <input
                  name="linkedin"
                  value={input.linkedin || ""}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter LinkedLn Url..." />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Summary</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="summary"
                  value={input.summary || ""}
                  onChange={handleChange}
                >
                </textarea>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Educational Backgroound</h5>
            <div className=" mt-2  p-2">
              <div className="form-group">
                <input
                  name="school"
                  value={input.school || ""}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter Institution Name..." />
              </div>
              <div className="form-group">
                <input
                  name="course"
                  value={input.course || ""}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter Course Name..." />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label >Start Date</label>
                    <input
                      name="start"
                      value={input.start || ""}
                      onChange={handleChange}
                      type="date"
                      className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label >End Date</label>
                    <input
                      name="end"
                      value={input.end || ""}
                      onChange={handleChange}
                      type="date"
                      className="form-control" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="des1"
                  value={input.des1 || ""}
                  onChange={handleChange}
                >
                </textarea>
              </div>
              <button className=" btn btn-sm info" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">Add Education</button>
            </div>
            <div className="collapse" id="collapseExample1">
              <div className=" mt-2  p-2">
                <div className="form-group">
                  <input
                    name="school1"
                    value={input.school1 || ""}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Enter Institution Name..." />
                </div>
                <div className="form-group">
                  <input
                    name="course1"
                    value={input.course1 || ""}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Enter Course Name..." />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label >Start Date</label>
                      <input
                        name="start1"
                        value={input.start1 || ""}
                        onChange={handleChange}
                        type="date"
                        className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label >End Date</label>
                      <input
                        name="end1"
                        value={input.end1 || ""}
                        onChange={handleChange}
                        type="date"
                        className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Description</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="des2"
                    value={input.des2 || ""}
                    onChange={handleChange}
                  >
                  </textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Experience</h5>
            <div className=" mt-2  p-2">
              <div className="form-group">
                <input
                  name="job"
                  value={input.job || ""}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter Job Title..." />
              </div>
              <div className="form-group">
                <input
                  name="company"
                  value={input.company || ""}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Enter Company Name..." />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label >Start Date</label>
                    <input
                      name="enter"
                      value={input.enter || ""}
                      onChange={handleChange}
                      type="date"
                      className="form-control"
                      placeholder="Enter Start Date..." />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label >End Date</label>
                    <input
                      name="leave"
                      value={input.leave || ""}
                      onChange={handleChange}
                      type="date"
                      className="form-control"
                      placeholder="Enter End Date..." />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="des3"
                  value={input.des3 || ""}
                  onChange={handleChange}
                >
                </textarea>
              </div>
              <button className=" btn btn-sm info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Add Experience</button>
            </div>
            <div className="collapse" id="collapseExample">
              <div className="p-2  mt-2 ">
                <div className="form-group">
                  <input
                    name="job1"
                    value={input.job1 || ""}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Enter Job Title..." />
                </div>
                <div className="form-group">
                  <input
                    name="company1"
                    value={input.company1 || ""}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Enter Company Name..." />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label >Start Date</label>
                      <input
                        name="enter1"
                        value={input.enter1 || ""}
                        onChange={handleChange}
                        type="date"
                        className="form-control"
                        placeholder="Enter Start Date..." />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label >End Date</label>
                      <input
                        name="leave1"
                        value={input.leave1 || ""}
                        onChange={handleChange}
                        type="date"
                        className="form-control"
                        placeholder="Enter End Date..." />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Description</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="des4"
                    value={input.des4 || ""}
                    onChange={handleChange}
                  >
                  </textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="btn info mt-3 ">BUILD YOUR CV</button>
          </div>
        </div>
      </form >
    </div >
  </div >)
};

export default Add
