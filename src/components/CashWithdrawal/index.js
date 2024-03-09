import {Component} from 'react'

import DenominationItem from './components/DenominationItem'

class CashWithdrawal extends Component {
  state = {rupees: 0}
  onSumChange = value => {
    this.setState(prev => {
      rupees: prev.rupees + value
    })
  }
  render() {
    const {denominationsList} = this.props
    const {rupees} = this.state
    return (
      <div id="root">
        <div>
          <div>
            <p>S</p>
            <h1>Sarah Williams</h1>
          </div>
          <div>
            <p>Your Balance</p>
            <div>
              <h1>{rupees}</h1>
              <p>In Rupees</p>
            </div>
          </div>
          <h1>Withdraw</h1>
          <p>CHHOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(each => (
              <DenominationItem eachItem={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
