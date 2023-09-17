import React, { useState } from 'react'
import "./App.css"
function App() {
  const [adddisplay, setdisplay] = useState({ condition: false, value: "add" });
  let [fri, setfri] = useState([
    { name: "Rock", image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", desc: "This user is clear " },
    { name: "Ben", image: "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg", desc: "This user is clear " },
    { name: "Harry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkr_jAyp3BEuaFiynThKWwosNUAcMFJsUPWXj9_9U&s", desc: "This user is clear " },])
  function showmodal() {
    setdisplay({ condition: true, value: "Close" })
  }
  function closemodal(params) {
    setdisplay({ condition: false, value: "Add" })
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
            < input type="text" placeholder='name' />
            <input type="text" placeholder='image' />
            <button >add</button></div>
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
