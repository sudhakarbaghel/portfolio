import React from 'react'

export default function MicroservicesIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={14}
      height={14}
      stroke="#00b4d8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <line x1="8.5" y1="8.5" x2="10" y2="10" />
      <line x1="15.5" y1="8.5" x2="14" y2="10" />
      <line x1="8.5" y1="15.5" x2="10" y2="14" />
      <line x1="15.5" y1="15.5" x2="14" y2="14" />
    </svg>
  )
}
