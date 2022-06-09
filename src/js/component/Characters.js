import React from 'react'
import { Card } from './Card'

const Characters = () => {
  return (
     <>
      <div className="container mb-4">
        <h1 className="p-3 text-start">Characters</h1>
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

export default Characters