interface Props {}

export const HelperSvgGradient = ({}: Props) => {
  return (
    <svg width='0' height='0'>
      <linearGradient id='gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
        <stop stopColor='#24C6DC' offset='0' />
        <stop stopColor='#514A9D' offset='100%' />
      </linearGradient>
    </svg>
  )
}
