import React from 'react'
import { Card } from './Card'

const Planets = () => {
  return (
    <>
      <div className="container">
        <h1 className="p-3 pt-5 text-start">Planets</h1>
        <div className="container d-flex w-100 overflow-auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          </div>
      </div>
    </>
  )
}

export default Planets