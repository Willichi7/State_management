import React from "react"
import { useSelector } from "react-redux"

const Notification = () => {
  
  const notification = useSelector(({notification}) => {
    return notification.notification
  })

  if (!notification) return null 

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  }

  return <div style={style}>{notification}</div>
}

export default Notification
