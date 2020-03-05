import React, { useEffect } from 'react';
import { connect } from "react-redux";
import OwnedTruck from '../components/OwnedTruck';
import { getMyTrucks } from '../actions';



const MyTrucks = ({getMyTrucks, trucks, error}) => {

    // const myTrucks = trucks.filter(truck => truck.owner === "berto")

  // const [ isLoading, setIsLoading ] = useState(false);

  // const loading = () => {
  //   setIsLoading(true);
  // }

   useEffect(() => {
     getMyTrucks();
    // loading();
  }, [getMyTrucks]);


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
        ) : (<OwnedTruck trucks={trucks} />)}
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
  { getMyTrucks }
)(MyTrucks);