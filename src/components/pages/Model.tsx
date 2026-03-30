import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas.tsx";
import {Error404} from "./Error404.tsx";
export const Model = () => {
    const params = useParams();
    //console.log(params)
    return(
        <div style={{textAlign:'center'}}>
            {adidasArr[Number(params.id)]
                ? <>
                    <h2>{adidasArr[Number(params.id)].model}</h2>
                    <h4>{adidasArr[Number(params.id)].collection}</h4>
                    <h3>{adidasArr[Number(params.id)].price}</h3>
                    <img
                        src={adidasArr[Number(params.id)].picture}
                        alt={adidasArr[Number(params.id)].model}
                        style={{width: '600px', height: 'auto', marginRight: '10px'}}
                        />
                </>
            :<Error404/>
            }
        </div>);
};