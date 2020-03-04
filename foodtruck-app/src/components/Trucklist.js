import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Truck from '../components/Truck';
import Loader from "react-loader-spinner";

import { getData } from '../actions';

const Trucklist = ({getData, trucks, error}) => {

  // const [ isLoading, setIsLoading ] = useState(false);

  // const loading = () => {
  //   setIsLoading(true);
  // }

   useEffect(() => {
     getData();
    // loading();
  }, [getData]);


  return (
      <div>
        {/* {isLoading && (
        <div>
          <Loader type="Puff" color="#204963" height={60} width={60} />
          <p>Loading Trucks...</p>
        </div>
        )} */}
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