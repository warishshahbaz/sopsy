import React, { useState } from "react";
import ItemCard from "./ItemCard";
import Slider from "./Slider";

const Home = ({realdata, backEndData,setbackendData,setLogout }) => {
  // const [myData, setMyData] = useState(backEndData);
 

  const Boys = () => {
    let res = backEndData && realdata.filter((x)=> {
      return  x.category === 'boys'
    });
    setbackendData(res);
  };
  const Girls = () => {
    let res = backEndData && realdata.filter((x)=> {
      return  x.category === 'girls'
    });
    setbackendData(res);
  
  };
  const allItems = () => {
    setbackendData(realdata);
  };
  return (
    <>
      <Slider/>
      <div className="categeries  text-center my-2categoery">
        <button className="btn btn-info mx-2" onClick={allItems}>
          All
        </button>
        <button className="btn btn-info mr-2" onClick={Boys}>
          Boys
        </button>
        <button className="btn btn-info mx-3" onClick={Girls}>
          Girls
        </button>
      </div>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {typeof backEndData !== "undefined" ? (
            backEndData.map((x,id) => {
              return <ItemCard text={x} id={id}/>;
            })
          ) : (
            <h3>Lodding...</h3>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
