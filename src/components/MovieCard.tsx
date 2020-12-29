import styled from "styled-components";


interface MovieCardProps {
    className?: string;
    readonly moviePosterUrl: string;
};

const DivMovieCard = styled.div<MovieCardProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px auto;
    width: 416px;
    height: 640px;
    background: url(${(props: any) => props.moviePosterUrl});
    background-position: center; 
    background-size: cover;
    border: 1px solid transparent;
    padding: 5px;
`;

const DivMovieCardTop = styled.div`
    display: flex;
    justify-content: center;
`;
const DivMovieCardBottom = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Label = styled.div`
    display: flex;
    word-break: break-all;
    white-space: nowrap;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 0 11px;
    background-color: hsla(0,0%,100%,.85);
    color: #777;
    fill: currentColor;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    margin-right: 0px;
    color: #777;
    fill: currentColor;
    border: 1px solid transparent;
    background-color: hsla(0,0%,100%,.85);
    border-radius: 4px;
    padding: 0 11px;
`;


const MovieCard = ( { movie, movieHandler, btnDisabled, btnLabel }: IMovieComProp ) => {
    return (
        <>
        <DivMovieCard moviePosterUrl={movie.Poster}>
            <DivMovieCardTop>
                    <Label>
                        <span>{ movie.Title } ({movie.Year})</span>
                    </Label>
            </DivMovieCardTop>
            <DivMovieCardBottom>
                <Button
                    type="button"
                    disabled={btnDisabled}
                    onClick={() => movieHandler(movie)}
                >
                    { btnLabel }
                </Button>
            </DivMovieCardBottom>
        </DivMovieCard>
            </>
    );
};

export default MovieCard;