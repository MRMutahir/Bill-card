import React, { useState } from "react";
import "./App.css";
function App() {
  const [adddisplay, setdisplay] = useState({ condition: false, value: "add" });
  const [filterdata, setfilterdata] = useState();
  const [totalValue, settotalValue] = useState();
  const [name, setname] = useState();
  const [image, setimage] = useState();
  const [color, setcolor] = useState();

  let [fri, setfri] = useState([
    {
      name: "Rock",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      desc: "There are currently no loans on this user.",
    },
    {
      name: "Ben",
      image:
        "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
      desc: "There are currently no loans on this user.",
    },
    {
      name: "Harry",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkr_jAyp3BEuaFiynThKWwosNUAcMFJsUPWXj9_9U&s",
      desc: "There are currently no loans on this user.",
    },
  ]);
  let [restList, setrestList] = useState();
  function showmodal() {
    setdisplay({ condition: true, value: "Close" });
  }
  function closemodal() {
    setdisplay({ condition: false, value: "Add" });
  }
  let [selectPerson, setselectPerson] = useState(false);
  function selectPersonFoo(index) {
    // console.log(index);
    setselectPerson(true);
    let filterd = fri.filter((ele, indexNum) => {
      return indexNum === index;
    });
    setfilterdata(filterd);
    console.log(filterd);
  }

  function addfri() {
    let newfri = {
      name: name,
      image: image,
      desc: "this time no charge",
    };
    setfri([...fri, newfri]);
    setdisplay({ condition: false, value: "Add" });
  }

  const [selectNumOwner, setNumOwner] = useState();
  const [otherPersonNum, setotherPersonNum] = useState();
  const [selectedValue, setValue] = useState();
  function owner(e) {
    // console.log(e.target.value);
    setNumOwner(e.target.value);
  }
  function otherPerson(e) {
    // console.log(e.target.value);
    setotherPersonNum(e.target.value);
  }
  function handleSelectChange(e) {
    setValue(e.target.value);
  }


  function Splitbill() {
    setselectPerson(false);
    // setinnerdata(...filterdata)
    let totlapyse = Number(Number(selectNumOwner) + Number(otherPersonNum));
    // console.log(totlapyse);
    // settotalValue(totalValue)
    let abjopyselenehenwo = totlapyse - selectedValue;
    // console.log(abjopyselenehenwo, ' ye pyse wo dega jis n pyse nh diye ');
    if (selectedValue !== selectNumOwner) {
      filterdata.map((ele) => {
        // console.log(`${ele.desc = `you owes ${ele.name}`} ${abjopyselenehenwo}`);
        setfilterdata([
          ...filterdata,
          (ele.desc = `you owes  ${ele.name} ${abjopyselenehenwo}`),
        ]);
        // setcolor("red")
      });
      // console.log(abjopyselenehenwo, "ab ye pyse owner dega");
    } else if (selectedValue !== otherPersonNum) {
      filterdata.map((ele) => {
        // console.log(`${ele.desc = `${ele.name} owes you`} ${abjopyselenehenwo}`);
        setfilterdata(
          ...filterdata,
          (ele.desc = `${ele.name}  owes you ${abjopyselenehenwo}`),
        );
        // setcolor("red")
      });
    } else {
      return alert("check input Value")

    }
    console.log(filterdata);
  }
  return (
    <>
      <div className="popapone">
        {adddisplay.condition === true ? (
          <div className="addListmodal">
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              placeholder="image"
              onChange={(e) => setimage(e.target.value)}
            />
            <button onClick={addfri}>add</button>
          </div>
        ) : (
          ""
        )}
        <div className="addbtn">
          <button
            onClick={adddisplay.value === "Close" ? closemodal : showmodal}
          >
            {adddisplay.value}
          </button>
        </div>
      </div>
      <div className="parent">
        {fri.map((ele, index) => (
          <>
            <div className="user">
              <img src={ele.image} alt="" />
              <h1>{ele.name} </h1>
              <br />
              <span className="green-text" style={{ color: "green" }}>{ele.desc}</span>
              <div>
                <button onClick={() => selectPersonFoo(index)}> Select</button>
                {selectPerson === true ? (
                  <div className="selectModal">
                    <h1>Split a bill with name</h1>
                    <div className="totalValue">{totalValue}</div>
                    <div className="calculate">
                      {filterdata.map((ele) => (
                        <>
                          <ul className="name">
                            <li>Your expense</li>
                            <li>{ele.name} expense</li>
                            <li>Who is paying the bill</li>
                            {/* <li>{ele.desc}</li> */}
                          </ul>
                          <ul className="input">
                            <li>
                              <input type="number" onChange={owner} />
                            </li>
                            <li>
                              <input type="number" onChange={otherPerson} />
                            </li>
                            <li>
                              <select
                                value={setValue}
                                onChange={handleSelectChange}
                              >
                                <option value=""></option>
                                <option value={selectNumOwner}>owner</option>
                                <option value={otherPersonNum}>
                                  {ele.name}
                                </option>
                              </select>
                            </li>
                          </ul>
                        </>
                      ))}
                    </div>
                    <button onClick={() => Splitbill()}>Split bill</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
