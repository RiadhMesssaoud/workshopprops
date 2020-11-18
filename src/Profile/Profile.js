import React from 'react'
import PropTypes from 'prop-types'; 

function Profile(props ) {
  const stylee={color:'red', testAlign:'center'}
   Profile.defaultProps={
  fullName:"React"
  ,bio : "Props"
 ,profession:'Hooks'

};
Profile.prototype={
   fullName:PropTypes.string
};

    return (
        <div style={stylee}>
            <h1>{props.fullName} </h1>
           <h3> {props.bio} </h3>
           <h3> {props.profession} </h3>
             {props.children}
     <button onClick={()=>props.handleName('React' )}> clickme </button>
     </div>
    )
   
}

export default Profile