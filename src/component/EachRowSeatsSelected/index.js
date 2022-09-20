import {MdEventSeat} from 'react-icons/md'

import './index.css'

const EachRowSeatsSelected = props => {
  const {row, bookedSeatsId, onClickSeat} = props
  const seatNos = [
    ['0', '1', '2', '3', '4'],
    ['5', '6', '7', '8', '9'],
  ]

  const onSelectSeat = event => {
    onClickSeat(event.target.value)
  }

  return (
    <li className="seat-list-item">
      <h1 className="sb-row-name">{row}</h1>
      <ul className="sb-selected-type-row">
        {seatNos[0].map(seat => {
          const selected = bookedSeatsId.includes(row + seat)
          if (selected) {
            return (
              <li key={seat + row} li className="list-item selected-list-item">
                <MdEventSeat />
              </li>
            )
          }
          return (
            <li key={seat + row} li className="list-item">
              <button type="button" value={row + seat} onClick={onSelectSeat}>
                <MdEventSeat />
              </button>
            </li>
          )
        })}
      </ul>
      <ul className="sb-selected-type-row">
        {seatNos[1].map(seat => {
          const selected = bookedSeatsId.includes(row + seat)
          if (selected) {
            return (
              <li key={seat + row} li className="list-item selected-list-item">
                <MdEventSeat />
              </li>
            )
          }
          return (
            <li key={seat + row} li className="list-item">
              <button type="button" value={row + seat} onClick={onSelectSeat}>
                <MdEventSeat />
              </button>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

export default EachRowSeatsSelected
