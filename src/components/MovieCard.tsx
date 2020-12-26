import NominateButton from "./NominateButton"


interface IMovie {
    id: string;
    movie: {
        Title: string;
        Poster: string;
        Year: string;
    };
    btnDisable?: any;
};


const MovieCard = ( props: IMovie ) => {
    const containerIdentifier = () => {
        const containerIdentifer = props.id.split('_')[0]
        switch (containerIdentifer) {
            case "ML":
                return true
            case "NR":
                return false
            default:
                break;
        };
    };
   

    return (
        <div className="moviecard">
            <img src={props.movie.Poster} alt={props.movie.Title}></img>
            {props.movie.Title}
            {props.movie.Year}
            {/* <NominateButton
                btnDisable={props.btnDisable || false} 
                btnToggle={containerIdentifier() ? setNominated : removeNominated } 
                movie={props.movie} 
                btnInnerHTML={ containerIdentifier() ? "Nominate Me!" : "Remove Me" } 
            /> */}
        </div>
    );
};

export default MovieCard;