import React from "react"

export type Props = {
  color: "red"| "blue"|"green"
  children: React.ReactNode
}

const Button = ({color, children}: Props) => {
  const style = {
    color: color,
  }
  return <button style={style}>{children}</button>
}

export default Button