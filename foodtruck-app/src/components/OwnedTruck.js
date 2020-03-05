import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { delTruck, getMyTrucks } from '../actions';

const Main = styled.div`
  background: white;
  padding: 25px;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  margin: 10% auto;
  max-width: 350px;
`;

const Header = styled.div`
  position: absolute;
  background: #FE9B86;
  font-size: 22px;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem 0.4rem 0 0;
`;

const SubText = styled.div`
  font-size: 18px;
  padding: 20px;
  color: gray;
`;


const OwnedTruck = props => {

    const deleteTruck = item => {
        props.delTruck(item);   
    }

    // const getNewTrucks = () => {
    //     getMyTrucks();
    // }

    useEffect(() => {
        getMyTrucks();
     }, []);


    return (
        props.trucks.map((truck) => {
          return <Main key={truck.id}>
            <Header>{truck.truckName}</Header>
            <SubText>{truck.foodType}</SubText>
            <SubText>{truck.location}</SubText>
            <Link to={`/update-truck/${truck.id}`}>
                Edit Truck
            </Link>
            <button onClick={e => {
                e.stopPropagation();
                deleteTruck(truck);
            }}>
                Delete Truck
            </button>
            </Main>
        })
    )
}

const mapStateToProps = state => {
    return {

    }
  }
  
  export default connect(
    mapStateToProps,
    { delTruck, getMyTrucks }
  )(OwnedTruck);