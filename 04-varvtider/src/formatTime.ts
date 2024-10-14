export const formatTime = (time: number) => {
  const milliseconds = `00${time % 1000}`.slice(-3)
  const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2)
  const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2)
  const hours = `0${Math.floor(time / 3600000)}`.slice(-2)

  return `${hours}:${minutes}:${seconds}.${milliseconds}`
}
