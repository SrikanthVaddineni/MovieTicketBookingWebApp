import {MdEventSeat} from 'react-icons/md'

import './index.css'

const EachRowSeats = props => {
  const {row} = props
  const seatNos = [
    ['0', '1', '2', '3', '4'],
    ['5', '6', '7', '8', '9'],
  ]

  return (
    <li className="seat-list-item1">
      <h1 className="sb-row-name">{row}</h1>
      <ul className="sb-not-selected-type-row">
        {seatNos[0].map(seat => (
          <li key={seat + row} className="list-item1">
            <MdEventSeat />
          </li>
        ))}
      </ul>
      <ul className="sb-not-selected-type-row">
        {seatNos[1].map(seat => (
          <li key={seat + row} className="list-item1">
            <MdEventSeat />
          </li>
        ))}
      </ul>
    </li>
  )
}

export default EachRowSeats
