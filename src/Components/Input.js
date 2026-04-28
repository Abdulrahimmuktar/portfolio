import React, { useState } from 'react'

function Input({ onChangeLocation, location }) {
  const [loc, setLoc] = useState(location)

  function handleSubmit(e) {
    e.preventDefault()
    if (loc.length < 2) return;
    onChangeLocation(loc)
  }

  return (
    <form onSubmit={handleSubmit}>

      <input value={loc} onChange={(e) => setLoc(e.target.value)} className='input' type="text" placeholder='Search from location....' />
      <button hidden></button>
    </form>

  )
}

export default Input
