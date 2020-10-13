// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import React from 'react'
import {Switch} from '../switch'

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 Add a property called `togglerProps`. It should be an object that has
  // `aria-pressed` and `onClick` properties.
  // 💰 {'aria-pressed': on, onClick: toggle}
  // Props collection
  const togglerProps = {'aria-pressed': on, onClick: toggle}
  // props getter
  function getTogglerProps(passedProps) {
    return {
      ...togglerProps,
      ...passedProps,
      onClick: () => {
        toggle()
        passedProps.onClick()
      },
    }
  }
  return {on, toggle, togglerProps, getTogglerProps}
}

function App() {
  const {on, togglerProps, getTogglerProps} = useToggle()
  return (
    <div>
      <Switch on={on} {...togglerProps} />
      <hr />
      <button
        {...getTogglerProps({
          'aria-label': 'custom-button',
          onClick: () => console.info('onButtonClick'),
          id: 'custom-button-id',
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
