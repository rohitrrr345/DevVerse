import { FaSearchengin } from "react-icons/fa6";
import Sidebar from "../Sidebar/Sidebar";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Cards from "../Card/Cards";
const Dashboard = () => {
  const cardData = [
    {
      id: 1,
      title: "Green Iguana",
      description:
        "Green iguanas are native to Central and South America and are popular pets.",
      imageUrl: "/static/images/cards/contemplative-reptile.jpg",
    },
    {
      id: 2,
      title: "Chameleon",
      description:
        "Chameleons are known for their color-changing abilities and unique eyes.",
      imageUrl: "/static/images/cards/chameleon.jpg",
    },
    {
      id: 3,
      title: "Komodo Dragon",
      description:
        "Komodo dragons are the largest living species of lizard, found in Indonesia.",
      imageUrl: "/static/images/cards/komodo-dragon.jpg",
    },
    {
      id: 4,
      title: "Gecko",
      description:
        "Geckos are small lizards found in warm climates throughout the world.",
      imageUrl: "/static/images/cards/gecko.jpg",
    },
    {
      id: 5,
      title: "Monitor Lizard",
      description:
        "Monitor lizards are large lizards found in Africa, Asia, and Oceania.",
      imageUrl: "/static/images/cards/monitor-lizard.jpg",
    },
    {
      id: 6,
      title: "Frilled Lizard",
      description:
        "Frilled lizards are known for the large frill around their necks.",
      imageUrl: "/static/images/cards/frilled-lizard.jpg",
    },
    {
      id: 7,
      title: "Basilisk Lizard",
      description: "Also known as the Jesus lizard, they can run on water.",
      imageUrl: "/static/images/cards/basilisk-lizard.jpg",
    },
    {
      id: 8,
      title: "Gila Monster",
      description:
        "Gila monsters are venomous lizards native to the southwestern United States.",
      imageUrl: "/static/images/cards/gila-monster.jpg",
    },
    {
      id: 9,
      title: "Tuatara",
      description:
        "Tuatara are reptiles endemic to New Zealand, the last survivors of an ancient lineage.",
      imageUrl: "/static/images/cards/tuatara.jpg",
    },
    {
      id: 10,
      title: "Bearded Dragon",
      description:
        "Bearded dragons are popular pet lizards with unique 'beards' that change color.",
      imageUrl: "/static/images/cards/bearded-dragon.jpg",
    },
    {
      id: 11,
      title: "Horned Lizard",
      description:
        "Known for its horn-like spines, found in North and Central America.",
      imageUrl: "/static/images/cards/horned-lizard.jpg",
    },
    {
      id: 12,
      title: "Skink",
      description:
        "Skinks are a diverse family of lizards with smooth, shiny scales.",
      imageUrl: "/static/images/cards/skink.jpg",
    },
    {
      id: 13,
      title: "Blue-Tongued Skink",
      description: "Known for its blue tongue, it is a popular pet.",
      imageUrl: "/static/images/cards/blue-tongued-skink.jpg",
    },
    {
      id: 14,
      title: "Desert Iguana",
      description:
        "Native to the southwestern United States and northwestern Mexico, it thrives in deserts.",
      imageUrl: "/static/images/cards/desert-iguana.jpg",
    },
    {
      id: 15,
      title: "Eastern Collared Lizard",
      description:
        "Found in the central United States, it is known for its bright colors.",
      imageUrl: "/static/images/cards/eastern-collared-lizard.jpg",
    },
    {
      id: 16,
      title: "Ridge-Tailed Monitor",
      description: "A small species of monitor lizard native to Australia.",
      imageUrl: "/static/images/cards/ridge-tailed-monitor.jpg",
    },
    {
      id: 17,
      title: "Argentine Black and White Tegu",
      description: "A large, intelligent lizard native to South America.",
      imageUrl: "/static/images/cards/argentine-tegu.jpg",
    },
    {
      id: 18,
      title: "European Green Lizard",
      description:
        "A brightly colored lizard found across southern and central Europe.",
      imageUrl: "/static/images/cards/european-green-lizard.jpg",
    },
    {
      id: 19,
      title: "Satanic Leaf-Tailed Gecko",
      description: "Known for its camouflage abilities, found in Madagascar.",
      imageUrl: "/static/images/cards/satanic-leaf-tailed-gecko.jpg",
    },
    {
      id: 20,
      title: "Malagasy Giant Day Gecko",
      description: "A large, vibrant gecko species found in Madagascar.",
      imageUrl: "/static/images/cards/giant-day-gecko.jpg",
    },
  ];

  return (
    <div className="admin-container grid grid-cols-[1fr_4fr] h-screen bg-[rgba(247,247,247)] gap-4 ">
      <Sidebar />
      <main className=" dashboard overflow-y-auto">
        <div className=" bar h-16 flex flex-row  justify-between w-full  py-0  ">
          <div className=" flex  items-center      py-2 px-4 gap-2 ">
            <input
              type="text"
              className="px-5 py-1 w-full rounded-2xl "
              id="search"
              placeholder="Search"
            />
            <label htmlFor="search">
              <FaSearchengin className="" />
            </label>
          </div>
          <div className="notifi flex items-center w-20 justify-center   ">
            <div className="w-full text-2xl ">
              <IoMdNotificationsOutline />
            </div>
          </div>
        </div>

        <section className="widget-container flex   justify-center items-center  ">

          <div className="grid grid-cols-3 gap-8 p-2">

            {cardData.map((item) => (
              <Cards item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
const WidgetItem = ({ heading, percent, color, amount = false }) => (
  <article className="widget w-[16rem] bg-white shadow-[0_0_10px_rgba(0,0,0,0.132)] p-8 rounded-[10px] flex flex-row justify-between items-stretch gap-0 ">
    <div className="widget-info">
      <p className="opacity-[0.7] text-[0.8rem] ">{heading}</p>
      <h4 className="text-[1.5rem]">{amount > 100 ? `>100` : amount}</h4>
      {percent > 0 ? (
        <span className="green flex flex-row justify-[unset] items-center gap-[0.2rem] ">
          <HiTrendingUp /> +{percent > 100 ? ">100" : percent}%{" "}
        </span>
      ) : (
        <span className="red flex flex-row justify-[unset] items-center gap-[0.2rem]">
          <HiTrendingDown /> {percent > 100 ? ">100" : percent}%{" "}
        </span>
      )}
    </div>

    <div
      className="widget-circle rounded-full flex-none grid place-items-center bg-[aquamarine] relative h-20 w-20 "
      style={{
        background: `conic-gradient(
          ${color} ${(Math.abs(percent) / 100) * 360}deg,
          rgb(255, 255, 255) 0
        )`,
      }}
    >
      <span
        className="relative"
        style={{
          color,
        }}
      >
        {percent > 100 ? ">100" : percent}%
      </span>
    </div>
  </article>
);

const CategoryItem = ({ color, value, heading }) => (
  <div className="category-item w-full overflow-x-hidden flex flex-row justify-center gap-4 p-4">
    <h5 className="tracking-[1px] font-light">{heading}</h5>
    <div className="ml-auto w-[6rem] bg-[rgb(217,217,217)] rounded-[20px] h-[0.5rem] flex-none ">
      <div
        className="rounded-[20px] h-full  "
        style={{
          backgroundColor: "blue",
          width: `${value > 100 ? 100 : value}%`,
        }}
      ></div>
    </div>
    <span className="text-[0.8rem] font-bold">
      {value > 100 ? "Full" : value}%
    </span>
  </div>
);

export default Dashboard;
