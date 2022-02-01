import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    cv: state,
  };
};

const View = (props) => {
console.log(props.cv)
  return <div>
    <div className='container'>
      {props.cv.map(cv => {
        return <p key={cv.phone}>{cv.email}vvv</p>
      })}
    </div>

  </div>;
};

export default connect(mapStateToProps)(View)
