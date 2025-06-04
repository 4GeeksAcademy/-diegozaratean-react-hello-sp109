import React from "react";

const Card = (props)=>{
    console.log(props)
    
    return(
        <div className="card" style={{width: "18rem",backgroundColor: props.color}} >
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.nombre} </h5>
                <p className="card-text">tengo {props.edad} años yo quiero ser {props.profesion}</p>
                <a href="#" className="btn btn-primary">mi parej es {props.pareja}</a>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Card