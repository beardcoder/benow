interface Props {}

export const HelperSvgGradient = ({}: Props) => {
  return (
    <svg width='0' height='0'>
      <linearGradient id='gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
        <stop stopColor='#bca1f7' offset='12.09%' />
        <stop stopColor='#e577b4' offset='42.58%' />
        <stop stopColor='#ff7170' offset='84.96%' />
      </linearGradient>
    </svg>
  )
}
