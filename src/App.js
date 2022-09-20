import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './component/Home'
import SeatBooking from './component/SeatBooking'
import NotFound from './component/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:category/movie/:id/booking" component={SeatBooking} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
