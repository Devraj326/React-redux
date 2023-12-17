import { useState } from 'react'
import './App.css'
import LikeContainer from './components/LikeContainer'
import { Provider } from 'react-redux'
import { myStore } from './redux/store'

function App() {

  return (
    <>
      <Provider store={myStore}>
        <LikeContainer/>
      </Provider>
    </>
  )
}

export default App