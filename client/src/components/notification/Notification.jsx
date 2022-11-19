import React from 'react';
import './notification.css'

const Notification = ({message, type}) => {
  let alert = 'notification';
  
  if( type === 'error' ) {
    alert += ' error'
  } else {
    alert += ' success'
  }

  return(
    <div className={alert}>
      { message }
    </div>
  )
}

export default Notification
