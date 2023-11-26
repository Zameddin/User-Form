import React from 'react'
import './Form.css'
import {useState} from 'react'
const Form = () => {
 const [num , setNum] = useState(0);
 const [length , setLength] = useState(0);
  const [myData , setMyData] = useState('');
const [myName , setMyName] = useState('');
const [mySurName , setMySurName] = useState('');
const [myEmail , setMyEmail] = useState('');
const [mySerh , setMySerh] = useState('');
const [checkSerh , setCheckSerh] = useState('');
const [submit , setSubmit] = useState('')
const checkMyName = (e) =>{
    setMyName(e.target.value)
        }
        const checkMySurname = (e) =>{
            setMySurName(e.target.value)
        }
        const checkMyEmail = (e) =>{
            setMyEmail(e.target.value)
        }
        const checkMySerh = (e) =>{
            setMySerh(e.target.value)
            setCheckSerh(e.target.value.length)
        }

    const myForm = (e) => {
        e.preventDefault();
    }
    const checkNumber = (e)=>{
    setMyData(e.target.value)

        setLength(e.target.value.length)
     
       if(Number(e.target.value.split('').slice(0,3).join('')) !== 994){
         setNum(Number(e.target.value.split('').slice(0,3).join('')))


       }else{
        setNum(Number(e.target.value.split('').slice(0,3).join('')))
       }
       
    }
  
    const checkData = () =>{
        if( num !== 994 && length !== 12  ){
            alert('Zehmet olmasa telefon nomresini duz daxil edin: Telefon nomresi 12 reqemden ibaret olmalidir ve 994 ile baslamalidir')
        }else if(checkSerh < 10){
alert('Serh daxil edin: Min 10 simvol')
        }
        else{
            setMyData('');
            setMyName('');
            setMySurName('');
            setMyEmail('');
            setMySerh('');
            setSubmit('Qeydiyyat tamamlandi!')
            document.querySelector('.submit').style.display = 'block'
        }
        
    }

  
    return (
        <div className='Form'>
           <p className='submit'>{submit}</p> 
            <h2>Qeydiyyat Form</h2>
            <form onSubmit={myForm}>
                <label>Ad</label>
                <input  required type="text" value={myName} onChange={checkMyName}/>
                <label>Soyad</label>
                <input  required type="text" value={mySurName} onChange={checkMySurname} />
                <label>Telefon nomresi</label>
                <input  placeholder='Numune: 994xxxxxxxxx' onChange={checkNumber} value={myData} maxLength={10} required type="number" />
                <label>Email</label>
                <input  required type="email"  value={myEmail} onChange={checkMyEmail}/>
                <label>
                    Şərh
                </label>
                <textarea   name="text"  minLength={10} value={mySerh} onChange={checkMySerh}> 
                </textarea>
                <button onClick={checkData} >GONDER</button>
            </form>
            
            
        </div>
    )
}

export default Form