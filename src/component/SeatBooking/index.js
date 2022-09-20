import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'
import EachRowSeats from '../EachRowSeats'
import EachRowSeatsSelected from '../EachRowSeatsSelected'

import './index.css'

const seatOptions = [
  {
    id: 'NONE',
    displayText: 'None',
  },
  {
    id: 'PREMIUM',
    displayText: 'Premium',
  },
  {
    id: 'NORMAL',
    displayText: 'Normal',
  },
]

const seats = [
  ['A', 'B', 'C', 'D', 'E', 'F'],
  ['G', 'H', 'I', 'J', 'K', 'L'],
]

class SeatBooking extends Component {
  state = {
    bookedSeatsId: [],
    seatType: 'NONE',
  }

  onChangeOption = event => {
    this.setState({seatType: event.target.value})
  }

  onClickSeat = seatId => {
    this.setState(prevState => ({
      bookedSeatsId: [...prevState.bookedSeatsId, seatId],
    }))
  }

  renderPremiumSeats = () => {
    const {bookedSeatsId, seatType} = this.state
    return (
      <div className="seat-booking-card">
        <h1 className="sb-hall-view">HALL VIEW</h1>
        <div>
          <h1 className="sb-type-select-title">
            Select seat type to choose Seats !
          </h1>
          <select
            value={seatType}
            onChange={this.onChangeOption}
            className="sb-type-select"
          >
            {seatOptions.map(type => (
              <option key={type.id} id={type.id} value={type.id}>
                {type.displayText}
              </option>
            ))}
          </select>
          <p>Select {seatType} seats Only...</p>
        </div>
        <h1 className="sb-type-title">Premium Section</h1>
        <ul className="sb-selected-type">
          {seats[0].map(seat => (
            <EachRowSeatsSelected
              key={seat}
              row={seat}
              bookedSeatsId={bookedSeatsId}
              onClickSeat={this.onClickSeat}
            />
          ))}
        </ul>
        <hr />
        <h1 className="sb-type-title">Normal Section</h1>
        <ul className="sb-selected-type">
          {seats[1].map(seat => (
            <EachRowSeats key={seat} row={seat} />
          ))}
        </ul>
        <div className="screen-view-card">
          <p>All eyes in this way</p>
          <div className="screen-view"></div>
        </div>
      </div>
    )
  }

  renderNormalSeats = () => {
    const {bookedSeatsId, seatType} = this.state
    return (
      <div className="seat-booking-card">
        <h1 className="sb-hall-view">HALL VIEW</h1>
        <div>
          <h1 className="sb-type-select-title">
            Select seat type to choose Seats !
          </h1>
          <select
            value={seatType}
            onChange={this.onChangeOption}
            className="sb-type-select"
          >
            {seatOptions.map(type => (
              <option key={type.id} id={type.id} value={type.id}>
                {type.displayText}
              </option>
            ))}
          </select>
          <p>Select {seatType} seats Only...</p>
        </div>
        <h1 className="sb-type-title">Premium Section</h1>
        <ul className="sb-selected-type">
          {seats[0].map(seat => (
            <EachRowSeats key={seat} row={seat} />
          ))}
        </ul>
        <hr />
        <h1 className="sb-type-title">Normal Section</h1>
        <ul className="sb-selected-type">
          {seats[1].map(seat => (
            <EachRowSeatsSelected
              key={seat}
              row={seat}
              bookedSeatsId={bookedSeatsId}
              onClickSeat={this.onClickSeat}
            />
          ))}
        </ul>
        <div className="screen-view-card">
          <p>All eyes in this way</p>
          <div className="screen-view"></div>
        </div>
      </div>
    )
  }

  renderNoneView = () => (
    <div className="seat-booking-card">
      <h1 className="sb-type-select-title">
        Select seat type to choose Seats !
      </h1>
      <select onChange={this.onChangeOption} className="sb-type-select">
        {seatOptions.map(type => (
          <option key={type.id} id={type.id} value={type.id}>
            {type.displayText}
          </option>
        ))}
      </select>
      <div className="sb-none-view">
        <img
          src="https://image.shutterstock.com/image-vector/prohibited-signs-isolated-on-white-260nw-1890653254.jpg"
          alt="seat logo"
          className="sb-none-view-image"
        />
        <p className="error-text">Choose Seats type to Select seats ...!</p>
      </div>
    </div>
  )

  renderAllViews = () => {
    const {seatType} = this.state
    switch (seatType) {
      case 'PREMIUM':
        return this.renderPremiumSeats()
      case 'NORMAL':
        return this.renderNormalSeats()
      case 'NONE':
        return this.renderNoneView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderAllViews()}
        <Footer />
      </div>
    )
  }
}

export default SeatBooking
