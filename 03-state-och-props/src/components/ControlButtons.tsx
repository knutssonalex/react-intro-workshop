interface ControlButtonsProps {
  isRunning: boolean
  onStart: () => void
  onStop: () => void
  onReset: () => void
}

const ControlButtons = ({ isRunning, onStart, onStop, onReset }: ControlButtonsProps) => {
  return (
    <div className="control-buttons">
      {isRunning ? <button onClick={onStop}>Stop</button> : <button onClick={onStart}>Start</button>}
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default ControlButtons
