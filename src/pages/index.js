import { navigate } from 'gatsby'
import React from 'react'
import Header from '../component/Header'
import Lolly from '../component/Lolly'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="listlollies">
        <div>
          <Lolly fillLollyBottom="green" fillLollyMiddle="blue" fillLollyTop="red" />
        </div>
        <div>

          <Lolly fillLollyBottom="green" fillLollyMiddle="blue" fillLollyTop="red" />
        </div>
      </div>
      <input type="button" value="create new lolly" onClick={() => { navigate("/createNew") }}></input>
    </div>
  )
}
