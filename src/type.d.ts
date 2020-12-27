interface IMovie {
    id: string;
    Title: string;
    Poster: string;
    Year: string;
};

type MovieState = {
    movie: IMovie[];
};

type MovieAction = {
    type: string;
    movie: IMovie;
};

type DispatchType = ( args: MovieAction ) => MovieAction;