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
    padding: 20px;
`;

const DivMovieCardTop = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const DivMovieCardBottom = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Label = styled.div`
    word-break: break-all;
    display: flex;
    align-items: center;
    color: #777;
    fill: currentColor;
    border: 1px solid transparent;
    background-color: hsla(0,0%,100%,.85);
    border-radius: 4px;
    padding: 0 11px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    margin-right: 10px;
    color: #777;
    fill: currentColor;
    border: 1px solid transparent;
    background-color: hsla(0,0%,100%,.85);
    border-radius: 4px;
    padding: 0 11px;
`;

const ToolTipDiv = styled.div`
    display: inline-block;
    border-bottom: 1px dotted black;

    .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        margin-left: -60px;
        
        /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */
        opacity: 0;
        transition: opacity 1s;
    }
    
    :hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
`;

const MovieCard = ( { movie, movieHandler, btnDisabled, btnLabel }: IMovieComProp ) => {
    return (
        <DivMovieCard moviePosterUrl={movie.Poster}>
            <DivMovieCardTop>
                <ToolTipDiv className="tooltip">
                    <Label 
                        style={{flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0}}
                    >
                        <span>{ movie.Title }</span>
                    </Label>
                    <span className="tooltiptext">{ movie.Title }</span>
                </ToolTipDiv>
                <Label>{movie.Year}</Label>
                <Button
                    type="button"
                    disabled={btnDisabled}
                    onClick={() => movieHandler(movie)}
                >
                    <span>{ btnLabel }</span>
                </Button>
            </DivMovieCardTop>
            <DivMovieCardBottom>
            </DivMovieCardBottom>
        </DivMovieCard>
    );
};

export default MovieCard;


// justify-content: center;
// margin-top: 0;
// color: white;
// background-color: black;

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