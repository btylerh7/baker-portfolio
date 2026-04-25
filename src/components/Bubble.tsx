const Bubble: React.FC<{ width?: number, height?: number }> = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={width ?? 100} height={height ?? 100}>
      <circle cx="50" cy="50" r="47" fill="var(--bg-light-2)" stroke="var(--bg-primary)" strokeWidth={3} />
    </svg>
  )
}
export default Bubble
