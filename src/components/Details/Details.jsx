import { useState, useEffect } from "react";
import Cast from "../Cast";


function Details () {

    let [details, setDetails] = useState([]);

    useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/movie/843527?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&append_to_response=credits,videos`).then((res)=>{
            return res.json();

        }).then((res)=>{
            setDetails(res);
        })
    },[])

    return (
        <div>
            {details.credit ? <Cast cast={details.credit.Cast} /> : null}
        </div>
    )
}

export default Details;