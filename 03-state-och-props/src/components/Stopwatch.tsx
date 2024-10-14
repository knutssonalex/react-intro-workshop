import { useRef, useState } from 'react'
import ControlButtons from './ControlButtons'

const formatTime = (time: number) => {
  const milliseconds = `00${time % 1000}`.slice(-3)
  const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2)
  const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2)
  const hours = `0${Math.floor(time / 3600000)}`.slice(-2)

  return `${hours}:${minutes}:${seconds}.${milliseconds}`
}

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
        <div className="stopwatch-display">{formatTime(time)}</div>
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
