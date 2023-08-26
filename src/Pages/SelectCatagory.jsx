import { useState } from "react";
import {useNavigate} from 'react-router-dom'

import action from "../assets/action.svg";
import drama from '../assets/drama.svg';
import romance from '../assets/romance.svg';
import thriller from '../assets/thriller.svg';
import western from '../assets/western.svg';
import horror from '../assets/horror.svg';
import fantacy from '../assets/fantacy.svg';
import music from '../assets/music.svg';
import fiction from '../assets/fiction.svg'
const list = [
  {
    genre: "Action",
    src: action,
    backgroundColor: "#FF5209"
  },
  {
    genre: "Horror",
    src: drama,
    backgroundColor:'#D7A4FF'
  },
  {
    genre: "Romance",
    src: romance,
    backgroundColor:'#148A08'
  },
  {
    genre: "Thriller",
    src: thriller,
    backgroundColor:'#84C2FF'
  },
  {
    genre: "Western",
    src: western,
    backgroundColor:'#902500'
  },
  {
    genre: "Horror",
    src:horror ,
    backgroundColor:'#7358FF'
  },
  {
    genre: "Fantacy",
    src: fantacy,
    backgroundColor:'#FF4ADE'
  },
  {
    genre: "Music",
    src: music,
    backgroundColor:'#E61E32'
  },
  {
    genre: "Fiction",
    src: fiction,
    backgroundColor:'#6CD061'
  },
];
function SelectCatagory() {
  const [select, setSelect] = useState([]);
  const [error, setError] = useState("");
  const navigate=useNavigate();

  const handleClick = (value) => {
    const fill = select.filter((el) => {
      return el == value;
    });
    if (fill.length > 0) {
      return;
    }

    setSelect([...select, value]);
  };
  const handleCross = (value) => {
    const filled = select.filter((ele) => {
      return ele != value;
    });
    console.log(filled);
    setSelect(filled);
  };
  const handleError = () => {
    if (select.length < 3) {
      setError("minimum 3  category required");
      return
    }
    var val=JSON.stringify(select)
    localStorage.setItem('categoryItem',val);
    return navigate('/weather')
  };
  return (
    <div className="page2">
      <div id="container">
        <div className="first_heading">
          <h1>Super app</h1>
          <p className="para">Choose your entertainment category</p>
          <div className="selectwrap">
            {select.map((el) => (
              <div className="select">
                <p>{el}</p>
                <h2 onClick={() => handleCross(el)}>X</h2>
              </div>
            ))}
          </div>
          {error ? <p className="err">{error}</p> : ""}
        </div>

        <div className="second_container">
          <div className="right_side">
            {list.map((el) => (
              <div className="div_container"
                style={{ backgroundColor: el.backgroundColor }}
                onClick={() => handleClick(el.genre)}
                key={el.genre}
              >
                <h1>{el.genre}</h1>
                <img  src={el.src} />
              </div>
            ))}
          </div>
          <div className="btnwrapper">
            <button onClick={handleError} className="btn">
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectCatagory;
