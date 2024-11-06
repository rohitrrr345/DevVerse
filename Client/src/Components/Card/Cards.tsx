import "./Card.css";
import { MdRemoveRedEye } from "react-icons/md";import { CiBookmark } from "react-icons/ci";
const Cards = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png"
          alt=""
        />
        <div className="card-content">
          <h3 style={
            {
              textAlign:"center",
            }
          }>{item.title}</h3>
          <p>{item.description}</p>
         <div className="m-2 flex flex-row  justify-between items-center gap-2">
         <button >View it<MdRemoveRedEye/>  </button>
         <button >  Save <CiBookmark/> </button>
         </div>

        </div>
      </div>
    </div>
  );
};

export default Cards;
