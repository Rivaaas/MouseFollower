import React from 'react'
import { useEffect, useState } from 'react'

function App() {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })



  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener("pointermove", handleMove)
    }

    //Cleanup
    //Cuando el componente se desmonta
    return () => {
      setPosition({ x: 0, y: 0 })
      window.removeEventListener("pointermove", handleMove)
    }


  }, [enabled])


  return (
    <>
     <div style={{
      position: 'absolute',
      backgroundColor: '#090a01',
      borderRadius: '50%',
      opacity: 0.8,
      border: "2px solid",
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}
    />
    <div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "desactivar " : "activar "}
        seguir puntero</button>
      </div>
       
      
    </>
  )
}

export default App
