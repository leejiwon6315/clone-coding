import React from "react";
import "./Detail.css";

class Detail extends React.Component  {

    componentDidMount(){
        const{ location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }

    render(){
        const { location } = this.props;
        if(location.state){
            return (
                <div className = "detail_container">
                    <h1 className = "detail_title">{ location.state.title } </h1>
                    <span>{ location.state.year } </span> 
                    <br/>
                    <span>{ location.state.summary } </span> 
                </div>
            );
        }
        else return null;
    }
}

export default Detail;