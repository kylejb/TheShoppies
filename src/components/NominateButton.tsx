import { useState } from "react";


interface IButtonProps {
    btnDisable: boolean;
    btnToggle: (nominated: any) => void;
    movie: any;
    btnInnerHTML: string;
};


const NominateButton = (props: IButtonProps) => {
    const [ selected, setSelected ] = useState(false);


    return (
        <button
            onClick={()=>{
                setSelected(!selected);
                props.btnToggle( (prevState: any) => [...prevState, props.movie] );
            }}
            type="button"
            disabled={props.btnDisable}
        >
            {props.btnInnerHTML}
        </button>
    );
};

export default NominateButton;
