import { useState } from "react";


interface IButtonProps {
    btnDisable: boolean;
    btnToggle: (nominated: any) => void;
    movie: any;
};

const NominateButton = (props: IButtonProps) => {
    const [ selected, setSelected ] = useState(false);


    return (
        <button
            type="button"
            onClick={()=> {
                setSelected(!selected)
                props.btnToggle( (prevState: any) => [...prevState, props.movie] )
            }}
            disabled={props.btnDisable}
        >
            Nominate Me
        </button>
    );
};

export default NominateButton;
