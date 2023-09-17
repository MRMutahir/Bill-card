import React, { useState } from 'react'
import "./App.css"
function App() {
  const [adddisplay, setdisplay] = useState({ condition: true, value: "add" });
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
  let [selectPerson, setselectPerson] = useState(false)
  function selectPersonFoo() {
    setselectPerson(true)
  }


  function addfri() {
    let newfri = {
      name: name,
      image: image
    }
    setfri([...fri, newfri])
    setdisplay({ condition: false, value: "Add" })

  }

  const [selectNumOwner, setNumOwner] = useState();
  const [otherPersonNum, setotherPersonNum] = useState();
  const [selectedValue, setValue] = useState();

  function owner(e) {
    // console.log(e.target.value);
    setNumOwner(e.target.value)
  }
  function otherPerson(e) {
    // console.log(e.target.value);
    setotherPersonNum(e.target.value)
  }
  function handleSelectChange(e) {
    setValue(e.target.value)
  }
  function Splitbill() {
    setselectPerson(false)
    console.log(selectNumOwner);
    console.log(otherPersonNum);
    console.log(selectedValue);
  }
  return (
    <>
      <div className="popapone" >
        {adddisplay.condition === true ?
          (<div className='addListmodal'>
            < input type="text" placeholder='name' onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder='image' onChange={(e) => setimage(e.target.value)} />
            <button onClick={addfri}>add</button>

          </div>
          )
          : console.log('Fals hen')
        }
        <div className="addbtn">
          <button onClick={adddisplay.value === "Close" ? closemodal : showmodal}>
            {adddisplay.value}
          </button>
        </div >
      </div>
      <div className='parent'>
        {fri.map((ele) => (
          <>
            <div className="user">
              <img src={ele.image} alt="" />
              <h1>{ele.name} </h1>
              <br />
              <span>{ele.desc}</span>
              <div>
                <button onClick={selectPersonFoo}> Select</button>
                {selectPerson === true ?
                  (
                    <div className='selectModal'>
                      <h1>Split a bill with name</h1>
                      <div className="calculate">
                        <ul className="name">
                          <li>Your expense</li>
                          <li>name expense</li>
                          <li>Who is paying the bill</li>
                        </ul>
                        <ul className="input">
                          <li><input type="number" onChange={owner} /></li>
                          <li><input type="number" onChange={otherPerson} /></li>
                          <li>
                            <select value={setValue} onChange={handleSelectChange } >
                              <option value=""></option>
                              <option value="owner">owner</option>
                              <option value="otherPerson">otherPerson</option>
                            </select>
                          </li>
                        </ul>
                      </div>
                      <button onClick={Splitbill}>Split bill</button>
                    </div>)
                  :
                  ""
                }

              </div>
            </div></>
        ))}</div>
    </>
  )
}


export default App
