import { MdRemoveRedEye } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom"

import "./Pdfcard.css"
const Pdfcard = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img
        src="https://www.citypng.com/public/uploads/preview/hd-pdf-file-document-black-icon-png-701751695035299dspnijtzoi.png"
          alt=""
        />
        <div className="card-content">
          <h3
            style={{
              textAlign: "center",
            }}
          >
            {item.title}
          </h3>
          <p>{item.description}</p>
          <div className="m-2 flex flex-row  justify-between items-center gap-2">
            <Link to={`/docsarray`}>
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

export default Pdfcard;
