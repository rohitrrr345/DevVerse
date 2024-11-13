import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { FaLink } from "react-icons/fa6";

import "./Saved.css"
const SavedItems = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img
        src="https://static.thenounproject.com/png/3810268-200.png"
          alt=""
        />
        <div className="card-content ">
          <h3
            style={{
              textAlign: "center",
            }}
          >
            {item.title}
          </h3>
          {/* <p>{item.description}</p> */}
          <div className=" w-full flex flex-col justify-center   items-center gap-2">
            <Link className="w-[80%]"  to={`/docsarray`}>
            <button>
              Visit   <FaLink/>
            </button>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedItems;
