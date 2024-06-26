import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Slider = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=6c2f0fd8f17254489c08e1441d4f5040"
      );
      const data = await res.json();
      console.log(data);
      setMovieData(data.results);
    };

    fetchData();
  }, []);

  return (
    // <>

    // </>
    <>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={true}>
        {movieData.map((movie) => {
          return (
            <Link key={movie.id} className="poster__container" to={"/"}>
              <div className="poster__image">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt=""
                />
              </div>
              <div className="poster__overlay">
                <div className="poster__title">Movie ABC</div>
                <div className="poster__runtime">
                  <div className="movie__runtime">2024</div>
                  <div className="movie__rating">5 Starts</div>
                </div>
                <div className="movie__description">
                  asfmaspld apldpasldpasld apldpaspdl asfmaspld apldpasldpasld
                  apldpaspdlasfmaspld apldpasldpasld apldpaspdlasfmaspld
                  apldpasldpasld apldpaspdlasfmaspld apldpasldpasld apldpaspdl
                </div>
              </div>
            </Link>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;
