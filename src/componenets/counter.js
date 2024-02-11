import React from 'react'
import { connect } from 'react-redux'
import { increment,decrement } from '../actions'


function Counter({count, increment, decrement}) {
  return (
    <div>
        <h1>Counter : {count} </h1>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
    </div>
  )
}
const mapStateToProps = (state) =>({
    count:state,
});


export default connect(mapStateToProps, {increment,decrement})(Counter);