import {useParams} from "react-router-dom";

const Details = () =>{

    const {id} = useParams();
    console.log("id",id)
    return (
        <div>Detail</div>
    )
};
export default Details;