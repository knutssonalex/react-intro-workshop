interface ControlButtonsProps {
  isRunning: boolean
  onStart: () => void
  onStop: () => void
  onReset: () => void
  onLap: () => void
}

const ControlButtons = ({ isRunning, onStart, onStop, onReset, onLap }: ControlButtonsProps) => {
  return (
    <div className="control-buttons">
      {isRunning ? <button onClick={onStop}>Stop</button> : <button onClick={onStart}>Start</button>}
      <button onClick={onReset}>Reset</button>
      <button onClick={onLap} disabled={!isRunning}>
        Lap
      </button>
    </div>
  )
}

export default ControlButtons
