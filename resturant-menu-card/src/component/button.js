import React from 'react'

export const Button = ({category , fun}) => {
    return (
        <div>
            {
                category.map((i,j)=> <button className="btn btn-dark"  key={j} onClick={()=> fun(i) } >{i}</button> )
            }
        </div>
    )
}
