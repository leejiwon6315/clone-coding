import React from "react";
import axios from "axios";
import Movie from "./Movie"; 
import "./App.css";
import MyHeader from "./MyHeader";

class App extends React.Component{
  state = {
    isLoading : true,
    movies: []
  };
  
getMovies = async () => {
  const {
    data: {
      data: { movies }
    }
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  
  this.setState({ movies, isLoading: false });
};

async componentDidMount(){
  // mount 과정에서 render() 실행 이후, 호출되는 함수

  this.getMovies();
};

  render(){

    const { isLoading, movies } = this.state;
    return(
      <section className = "container">
        { isLoading 
        ? <div className = "loader">
            <span className = "loader_text">Loading</span>
          </div> 
        : <>
          <MyHeader/>
          <div className = "movies">
              {
                movies.map(movie => (

                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year} 
                    title={movie.title} 
                    genres={movie.genres}
                    summary={movie.summary} 
                    poster={movie.medium_cover_image} 
                  />
                )) 
              }
            </div>

            </>
        }  
      </section>
      
    );
  }

}

export default App;
