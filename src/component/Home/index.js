import {Component} from 'react'

import Header from '../Header'
import MovieCard from '../MovieCard'
import Footer from '../Footer'

import './index.css'

const recommendedMovies = [
  {
    movieName: 'Brahmastra',
    id: 1,
    posterUrl:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSy7CgiiiiJSr9NXfKARKzxwrqOiEW4e_hTss90U0Gi3CfuYA2-',
    likes: 80.6,
    votes: 38380,
    genre: 'Action, Adventure, Fantasy',
    category: 'recommended',
  },
]

const teluguMovies = [
  {
    movieName: 'RRR',
    id: 1,
    posterUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6L2WmlrU5r2HzTKoXTJC5DFyU9vMbUJ79Cp5P7RB5QEEnXkH',
    likes: 89.2,
    votes: 51845,
    genre: 'Action, Drama, Historical',
    category: 'telugu',
  },
  {
    movieName: 'Pushpa: The Rise',
    id: 2,
    posterUrl:
      'https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg',
    likes: 88,
    votes: 48341,
    genre: 'Action, Triller',
    category: 'telugu',
  },
]

const tamilMovies = [
  {
    movieName: 'Vikram',
    id: 1,
    posterUrl:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul',
    likes: 92.4,
    votes: 28745,
    genre: 'Action, Triller',
    category: 'tamil',
  },
]

const hindiMovies = [
  {
    movieName: 'Bachchhan Paandey',
    id: 1,
    posterUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qZ4_UyKB6QxVIw37LYYz5kG2cSUZFRBPIDlcAvT6&usqp=CAE&s',
    likes: 69.4,
    votes: 18380,
    genre: 'Action, Comedy, Crime',
    category: 'hindi',
  },
]

class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <Header />
        <div className="home-card">
          <h1 className="home-msg">Hello.. Book Your Seat...!</h1>
          <h1 className="home-title">Movies on Silver Screen</h1>
          <h1 className="movies-languages">Recommended Movies</h1>
          <ul className="movies-list">
            {recommendedMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
          <h1 className="movies-languages">Telugu Movies</h1>
          <ul className="movies-list">
            {teluguMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
          <h1 className="movies-languages">Tamil Movies</h1>
          <ul className="movies-list">
            {tamilMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
          <h1 className="movies-languages">Hindi Movies</h1>
          <ul className="movies-list">
            {hindiMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
