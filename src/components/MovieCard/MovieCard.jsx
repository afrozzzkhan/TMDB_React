import './MovieCard.css';
function MovieCard({movie}){

    return (
        <div className="card">

            <div className="card-img">
                
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
            </div>
            <div className="card-title">
                {movie.title}
            </div>
            
        </div>
    )
}

export default MovieCard;