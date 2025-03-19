import React from 'react'

type Props = {}

const SolidityIcon = (props: Props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 32 32"
    {...props}
  >
    <title>{"file_type_solidity"}</title>
    <path
      d="m20.477 2-4.5 8h-9l4.5-8h9M11.52 30l4.5-8h9l-4.5 8h-9"
      style={{
        fill: "#c1c1c1",
        opacity: 0.45,
        isolation: "isolate",
      }}
    />
    <path
      d="M15.975 10h9l-4.5-8h-9ZM16.022 22h-9l4.5 8h9Z"
      style={{
        fill: "#c1c1c1",
        opacity: 0.6,
        isolation: "isolate",
      }}
    />
    <path
      d="m11.477 18 4.5-8-4.5-8-4.5 8ZM20.52 14l-4.5 8 4.5 8 4.5-8Z"
      style={{
        fill: "#c1c1c1",
        opacity: 0.8,
        isolation: "isolate",
      }}
    />
  </svg>
  )
}

export default SolidityIcon