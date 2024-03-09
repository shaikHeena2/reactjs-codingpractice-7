const DenominationItem = props => {
  const {eachItem} = props
  const {value, id} = eachItem
  onIncrement = () => {
    onSumChange(value)
  }
  return (
    <li>
      <button onClick={onIncrement}>{value}</button>
    </li>
  )
}
export default DenominationItem
