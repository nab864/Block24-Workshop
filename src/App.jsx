import { useState } from 'react'
import { puppyList } from './data'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setfeatPupId] = useState(null)
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)
  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return <p onClick={() => {setfeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })}
      </div>
      {featPupId && (
        <div>
          <h2>{featuredPup.id}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>Is Cute?: {featuredPup.isCute.toString()}</li>
          </ul>
        </div>
        )}
    </>
  )
}

export default App
