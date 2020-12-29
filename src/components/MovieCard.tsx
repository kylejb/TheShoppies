import styled from "styled-components";

const DivMovieCard = styled.div`
    justify-content: space-between;
    flex-direction: column;
    display: flex;
    height: auto;
    padding: 5px;
    margin: 5px;
    background-color: teal;
`;

const MoviePoster = styled.img`
    width: auto;
    height: 50vh;
    vertical-align: middle;

`;

const Button = styled.button`
    justify-content: center;
    margin-top: 0;
    color: white;
    background-color: black;
`;

const MovieCard = ( { movie, movieHandler, btnDisabled, btnLabel }: IMovieComProp ) => {
    return (
        <DivMovieCard>
            {movie.Title} ({movie.Year})<br/>
            <MoviePoster className="image" src={movie.Poster} alt={movie.Title}></MoviePoster>
            <Button
                type="button"
                disabled={btnDisabled}
                onClick={(e) => movieHandler(movie)}
            >
                { btnLabel }
            </Button>
        </DivMovieCard>
    );
};

export default MovieCard;


// -webkit-box-sizing: border-box;
// -moz-box-sizing: border-box;
// box-sizing: border-box;

// @keyframes nohovering {
//     0%   { z-index: 9; }
//     100% { z-index: 1; }
// }

// @keyframes hovering {
//     0%   { z-index: 10; }
//     100% { z-index: 10; }
// }

// -webkit-transition: all 1s ease; /* Safari and Chrome */
// -moz-transition: all 1s ease; /* Firefox */
// -ms-transition: all 1s ease; /* IE 9 */
// -o-transition: all 1s ease; /* Opera */
// transition: all 1s ease;

// :hover {
//     -webkit-transform:scale(1.25); /* Safari and Chrome */
//     -moz-transform:scale(1.25); /* Firefox */
//     -ms-transform:scale(1.25); /* IE 9 */
//     -o-transform:scale(1.25); /* Opera */
//     transform:scale(1.25);
// }

// const MoviePoster = styled.img`
//     width: 100%;
//     height: auto;
//     vertical-align: middle;
// `;