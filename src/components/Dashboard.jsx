/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ColorCard from './ColorCard';
import Header from './Header';
import paletteActions from '../Redux/paletteActions';

const Dashboard = () => {
  const colorArray = useSelector(state => state.palette.palettes, shallowEqual) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(paletteActions.loadPalette());
  }, [dispatch]);

  return (
    <div className="ui container">
      <Header />
      <ColorCard colorArray={colorArray} />
    </div>
  );
};

export default Dashboard;
