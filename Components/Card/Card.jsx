import React from 'react'

export const Card = (props) => {
    const viewMovie=()=>{  }
    const delMovie=()=>{  }
    const addToCart=()=>{  }
    return (
        <>
            <div  className="col-md-6 col-lg-4 p-3" >
                <div className="card p-2" >
                    <img
                        src={'https://image.tmdb.org/t/p/w500'+props.item.poster_path}
                        className="card-img-top "
                        style={{height:"300px"}}
                        alt={props.item.title}
                    />
                    <span className="position-absolute fs-3 p-2 top-0 start-0  badge rounded-pill bg-danger opacity-50">
                        {Math.round(props.item.vote_average)} / 10
                    </span>
                    <div className="card-body">
                        <h5 className="card-title overflow-hidden" style={{height:"50px"}}>
                            {props.item.title}
                        </h5>
                        <p className="card-text overflow-hidden" style={{height:"100px"}}>
                            {props.item.overview}
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
