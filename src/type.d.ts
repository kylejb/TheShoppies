interface IMovieComProp {
    movie: {
        imdbID: string;
        Title: string;
        Poster: string;
        Year: string;
    };
    movieHandler: (movieObj: IMovieComProp["movie"]) => void;
};

type Movie = {
    imdbID: string;
    Title: string;
    Poster: string;
    Year: string;
};

interface MovieState {
    nominated: Movie[]
};

type MovieAction = {
    type: string;
    movie: IMovie;
};

type DispatchType = ( args: MovieAction ) => MovieAction;