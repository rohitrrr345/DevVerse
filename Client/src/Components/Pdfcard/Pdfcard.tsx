import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { MdOutlineRemoveRedEye } from "react-icons/md";

import "./Pdfcard.css"
const Pdfcard = ({ item }) => {
  return (
    <div className="card-containersa">
      <div className="cardsa">
        <img
        src="https://icones.pro/wp-content/uploads/2021/03/icone-pdf-noire-symbole-png.png"
          alt=""
        />
        <div className="card-contentsa ">
          <h3
            style={{
              textAlign: "center",
            }}
          >
            {item.title}
          </h3>
          <p>{item.description}</p>
          <div className=" w-full flex flex-col justify-center   items-center gap-2">
            <Link className="w-[80%]"  to={`/docsarray`}>
            <button>  Download
            <FaDownload />{" "}</button>
            </Link>
            <Link className="w-[80%]" to={`/preview`}>
            <button>
            {" "}
            Preview <MdOutlineRemoveRedEye />{" "}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdfcard;
