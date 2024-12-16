import React from 'react'

type Props = { name: string, placeholder: string, type : string }
export default function Inputs({ name, placeholder, type }: Props) {
  return (
        <input type={type} name={name} placeholder={placeholder } />
  )
}
