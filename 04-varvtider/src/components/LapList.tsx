import { formatTime } from '../formatTime'

interface LapListProps {
  laps: number[]
}

const LapList = ({ laps }: LapListProps) => {
  return (
    <div className="lap-list">
      {laps.length > 0 && <h2>Laps</h2>}
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index}: {formatTime(lap)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LapList
