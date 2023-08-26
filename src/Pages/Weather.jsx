import page3img from "../assets/page3img.svg";
import { useState, useEffect } from "react";
import moment from "moment";
import heavyrain from "../assets/heavyrain.svg";
import pressure from "../assets/pressure.svg";
import wind from "../assets/wind.svg";
import humidiy from "../assets/humidiy.svg";
import mount from "../assets/mount.svg";

function Weather() {
  const [values, setValues] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [movie, setMovie] = useState(
    JSON.parse(localStorage.getItem("categoryItem"))
  );
  const [weather, setWeather] = useState({});
  const [news, setNews] = useState([]);

  useEffect(() => {
    getData();
    getNews();
  }, []);
  const getData = () => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=cuttack&appid=8e124fac44ff8d037d46b725a5a04494`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWeather(data);
      });
  };
  const getNews = () => {
    return fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=c6a4989726f74e7fb3b8c4a1b02b7a00`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNews(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(news);
  //  console.log(weather)
 if(Object.keys(weather||news).length===0){
  return
 }
  return (
    <div className="container3">
      <div className="left-container3">
        <div className="left-container4">
          <div>
            <img className="page3img" src={page3img} alt="music" />
          </div>
          <div className="userdetails">
            <p>{values.name}</p>
            <p>{values.email}</p>
            <p>{values.username}</p>
            <button>{movie[0]}</button>
            <button>{movie[1]}</button>
            <button>{movie[2]}</button>
            <button>{movie[3]}</button>
          </div>
        </div>
        <div className="left-container5">
          <div>
            <p className="date-time">
              {moment().format("MM- D -YYYY  h:mm a")}
            </p>
          </div>
          <div className="footer">
            <div className="footer1">
              <img src={heavyrain} alt="heavyrain" />
              <p>{weather?.weather[0]?.description}</p>
            </div>
            <div className="footer2">
              <p className="footer2-para1">
                {Math.round(weather?.main?.temp - 273)}&#176;C
              </p>
              <img src={pressure} alt="pressure" />
              <p className="footer2-para2">{weather?.main?.pressure}mbar</p>
              <p className="footer2-para3">Pressure</p>
            </div>
            <div className="footer3">
              <img src={wind} alt="wind" />
              <p className="footer3-para1">{`${weather?.wind?.speed} km/h`} </p>
              <p className="footer3-para2">Wind</p>
              <img src={humidiy} alt="humidiy" />
              <p className="footer3-para3">{weather?.main?.humidity}</p>
              <p className="footer3-para4">Humidiy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-container3">
        <img src={news[0]?.urlToImage} alt="mount" />

        <div className="mount-header">
          <p>{news[0]?.title}</p>
          <p>{moment().format("MM- D -YYYY  h:mm a")}</p>
        </div>
        <div className="buttom-div">
          <p>{news[0]?.content}</p>
        </div>
      </div>
    </div>
  );
}
export default Weather;
