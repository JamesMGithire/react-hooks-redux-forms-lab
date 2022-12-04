import React from 'react'
import { useSelector } from 'react-redux'
import BandInput from './BandInput';
import { useDispatch } from "react-redux";
import { bandAdded } from './bandsSlice';
function BandContainer() {
  const dispatch = useDispatch();

  function onBandSubmit(input){
    dispatch(bandAdded(input));
  }
  const bands = useSelector((state) => state.bands.entities)
  return(
  <>
    <div>BandsContainer</div>
    <BandInput onBandSubmit={onBandSubmit}/>
    <ul>{bands.map((band, ind)=><li key={ind}>{band}</li>)}</ul>
  </>
  );
}

export default BandContainer
