import React from 'react'

const WebIcon = props => (
  <svg viewBox="0 0 32 32" data-ois="web" {...props}>
    <rect
      x="4.3"
      y="7.5"
      className="ois-supporting-shape"
      width="26.7"
      height="11.1"
      ois-scale-in="true"
      ois-web-idx="1"
    />
    <path
      className="ois-supporting-stroke"
      d="M6.5 22.3H1V4h28.2v18.3h-4.9M21.5 22.3h-7.9M1 6.2h28.2M27 6.2V4M7.6 6.2V4M5.4 6.2V4M3.2 6.2V4M8.4 9.9h8.5M8.4 11.8h6.7"
    />
    <circle
      className="ois-supporting-stroke"
      cx={5}
      cy={10.6}
      r={1.6}
    />
    <circle
      className="ois-supporting-stroke"
      cx={10.1}
      cy={18.6}
      r={1.6}
    />
    <path
      className="ois-supporting-stroke"
      d="M19.7 9h6.4v4.2h-6.4zM6.6 15h6.9v12.5H6.6z"
    />
    <path
      className="ois-focus-stroke"
      d="M8.4 22.3h3.4v3.4H8.4zM22.9 17.5v8.1h-4.3"
    />
    <path
      className="ois-focus-stroke"
      d="M20.1 27.3l-1.6-1.7 1.6-1.6M19.7 15.5h6.4v4.2h-6.4z"
    />
  </svg>
)

export default WebIcon
