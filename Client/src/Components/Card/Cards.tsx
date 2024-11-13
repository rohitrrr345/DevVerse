import "./Card.css";
import { MdRemoveRedEye } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
const Cards = ({ item }) => {
  return (
    <div className="card-containers">
      <div className="cards">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="card-contents">
          <h3
            style={{
              textAlign: "center",
            }}
          >
            {item.title}
          </h3>
          <p>{item.description}</p>
          <div className="m-2 flex flex-row  justify-between items-center gap-2">
            <Link to={`/docsarray/`}>
            <button>  View
            <MdRemoveRedEye />{" "}</button>
            </Link>
            <Link to={`/docsarray}`}>
            <button>
            {" "}
            Save <CiBookmark />{" "}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
