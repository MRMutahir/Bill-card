import React, { useState } from 'react'
import "./App.css"
function App() {
  const [adddisplay, setdisplay] = useState({ condition: false, value: "add" });
  const [name, setname] = useState()
  const [image, setimage] = useState()

  let [fri, setfri] = useState([
    { name: "Rock", image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", desc: "This user is clear " },
    { name: "Ben", image: "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg", desc: "This user is clear " },
    { name: "Harry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkr_jAyp3BEuaFiynThKWwosNUAcMFJsUPWXj9_9U&s", desc: "This user is clear " },])
  let [restList, setrestList] = useState()
  function showmodal() {
    setdisplay({ condition: true, value: "Close" })
  }
  function closemodal() {
    setdisplay({ condition: false, value: "Add" })
  }

  function getfri() {
    let newfri = {
      name: name,
      image: image
    }
    setfri([...fri, newfri])
    // console.log(newfri);

    //  let resValue = [ name, image ]
    // // console.log(...resValue);
    //  setrestList({name,image})
    // // setfri([...resValue])
    //  console.log(restList);
  }
  return (
    <>
      <div className="addbtn">
        <button onClick={adddisplay.value === "Close" ? closemodal : showmodal}>
          {adddisplay.value}
        </button>
      </div >
      <div className="popapone" >
        {adddisplay.condition === true ?
          (<div>
            < input type="text" placeholder='name' onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder='image' onChange={(e) => setimage(e.target.value)} />
            <button onClick={getfri}>add</button></div>
          )
          : console.log('Fals hen')
        }
      </div>
      <div className='parent'>
        {fri.map((ele) => (
          <>
            <div className="user">
              <img src={ele.image} alt="" />
              <h1>{ele.name} </h1>
              <br />
              <span>{ele.desc}</span>
              <button>Select</button>
            </div></>
        ))}</div>
    </>
  )
}

export default App
