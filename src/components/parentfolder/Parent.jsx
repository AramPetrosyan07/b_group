import React from 'react'
import Main from '../main/Main'
import About from '../main/About'
import Conclusion from '../main/Conclusion'
import HowToFarm from '../main/HowToFarm'
import Changelog from '../changelog/Changelog'
import Protected from '../protected/Protected'

export default function Parent() {
  return (
    <div>
        <Main/>
        <About/>
        <Conclusion/>
        <HowToFarm/>
        <Changelog/>
        <Protected/>
    </div>
  )
}
