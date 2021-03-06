import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const StockComponent = ({latest: {symbol, price, high, low, latestDay}}) => (
  <div className = "card mt-4">
    {(symbol) ? (<div className = "card-header">
      <h3 style = {{fontSize: '1.5rem'}}>{symbol}: <span className = "text-success"><Moment format = "MMM Do, YYYY">{latestDay}</Moment></span></h3>
    </div>): null}
      
    {(price, high, low, latestDay) ? (<div className = "card-body">
      <h4>Current Price: {price}</h4>
      <h4>High: {high}</h4>
      <h4>Low: {low}</h4>
      <Link className = "btn btn-warning mt-3" to = '/'>Back to Search</Link>
    </div>) : 
    <div className = "card-body text-center">
      <p class = "card-text text-danger">You've entered an incorrect quote. Go back and try again.</p>
      <Link className = "btn btn-warning mt-3" to = '/'>Back to Search</Link>
    </div>}
  </div> 
);


export default StockComponent;