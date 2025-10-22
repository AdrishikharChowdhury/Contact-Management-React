import React from 'react'

const Message = ({message}) => {
  return (
    <div className="bg-green-500 text-white p-5 rounded-md mt-4">
          {message}
        </div>
  )
}

export default Message