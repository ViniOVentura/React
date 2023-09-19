import { useState } from "react";
import Filho from "./Filho";

const Pai = () => {
    const [texto, setTexto] = useState('');
    return(
        <div>
            <input type='text' value={texto} onChange={(e) => setTexto(e.target.value)}></input>
            <Filho texto={texto}/>

        </div>
    )


}
export default Pai;