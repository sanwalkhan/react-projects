
import React,{ Component } from "react";
import Data from "./data";

export default class Card extends Component{
    render(){
        return(
            <div className="App">
                {
                 Data.map((item , i) => {
                     return(
                        <div key={i} className="card" >
                        <h2 className="card-title">Person {item.id }</h2>
                        <img className="card-img-top" alt="..." src={item.image} />
                        <div className="card-body">
                          <h2 className="card-title"> {item.name}</h2>
                          <h5 className="card-text"> Age : {item.age} </h5>
                        </div>
                      </div>
                     )
                 })
                }
            </div>
        )
    }
}