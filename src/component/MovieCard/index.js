import {Link} from 'react-router-dom'

import {FcLike} from 'react-icons/fc'
import {BiUpvote} from 'react-icons/bi'

import './index.css'

const MovieCard = props => {
  const {movie} = props
  const {id, movieName, posterUrl, likes, votes, genre, category} = movie
  return (
    <>
      <Link to={`/${category}/movie/${id}/booking`}>
        <li className="movie-item">
          <img src={posterUrl} alt="movie poster" className="movie-poster" />
          <div className="movie-details">
            <h1 className="movie-title">{movieName}</h1>
            <div className="movie-interactions">
              <p className="movie-likes">
                <FcLike />
                {likes} %
              </p>
              <p className="movie-likes">
                <BiUpvote />
                {votes}
              </p>
            </div>
            <p className="movie-likes">{genre}</p>
          </div>
        </li>
      </Link>
    </>
  )
}
export default MovieCard
