interface Props {}

export const HelperSvgGradient = ({}: Props) => {
  return (
    <svg width='0' height='0'>
      <linearGradient id='gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
        <stop stopColor='#84cc16' offset='0' />
        <stop stopColor='#4ade80' offset='100%' />
      </linearGradient>
    </svg>
  )
}
