interface IButtonProps {
    btnDisable: boolean;
    btnToggle: (nominated: any) => void;
    movie: any;
    btnInnerHTML: string;
};

interface IMovie {
    id: string;
    movie: {
        imdbID: string;
        Title: string;
        Poster: string;
        Year: string;
    };
    movieHandler?: any;
};

type MovieState = {
    movie: IMovie[];
};

type MovieAction = {
    type: string;
    movie: IMovie;
};

type DispatchType = ( args: MovieAction ) => MovieAction;