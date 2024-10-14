import { useRef, useState } from 'react'
import ControlButtons from './ControlButtons'

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const intervalRef = useRef<number | null>(null)

  const startStopwatch = () => {
    if (!isRunning) {
      const startTime = Date.now() - time
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime)
      }, 10)
      setIsRunning(true)
    }
  }

  const stopStopwatch = () => {
    if (isRunning && intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setIsRunning(false)
    }
  }

  const resetStopwatch = () => {
    stopStopwatch()
    setTime(0)
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Stopwatch</h1>
        <div className="stopwatch-display">{time}</div>
        <ControlButtons
          isRunning={isRunning}
          onStart={startStopwatch}
          onStop={stopStopwatch}
          onReset={resetStopwatch}
        />
      </div>
    </div>
  )
}

export default Stopwatch
