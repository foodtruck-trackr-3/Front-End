import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Truck from '../components/Truck';

import { getData } from '../actions';

const Trucklist = ({getData, trucks, error}) => {

  useEffect(() => {
    getData();
  }, [getData]);

  return (
      <div>
        {error ? (
          <div>{error}</div>
        ) : (<Truck trucks={trucks} />)
        }
      </div>
  )
}

const mapStateToProps = state => {
  return {
    trucks: state.trucks,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Trucklist);