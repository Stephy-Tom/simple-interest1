import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { style } from '@mui/system';
import { useState } from 'react';

function App() {
  const [interest,setInterest]=useState(0)
  const [amount,setAmount]=useState(0)
  const [year,setYear]=useState(0)
    
 
  const [result,setResult]=useState(0)
  const [isAmount,setIsAmount]=useState(true)
  const [isInterest,setIsInterest]=useState(true)
  const [isYear,setIsYear]=useState(true)
  const findInterest = (e) =>
  {  
    e.preventDefault();
    let result=(amount*interest*year) / 100
    console.log(result);
    setResult(result)
    
  }
  const handleReset=()=>{
    setAmount(0);
    setInterest(0);
    setYear(0);
    setResult(0);
  }
  const validate = (e) =>
  {
    const{name,value}=e.target;
    
    console.log(name,value);
    if(name==='amount')
    {setAmount(value);
      let res=(!!value.match(/^[0-9]+$/));
      if(res===true){
      setIsAmount(true);
      }
      else{
        setIsAmount(false);
      }
    }
    else if(name==='interest')
    {
      setInterest(value);
      let res=(!!value.match(/^[0-9]+$/));
      if(res===true){
      setIsInterest(true);
      }
      else{
        setIsInterest(false);
      } 
    }
    else{
      {
        setYear(value);
        let res=(!!value.match(/^[0-9]+$/));
      if(res===true){
      setIsYear(true);
      }
      else{
        setIsYear(false);
      } 
        
      }
    }
  }
    return (
    <>
    <div className='d-flex justify-content-center bg-dark align-items-center w-100' style={{height:"110vh"}}>
     <div className='bg-light p-5 rounded' style={{width:"500px"}}>
    <h1>Simple Interest App</h1>
    <p>Calculate your simple interest easily</p>
    <div style={{height:"150px"}} className='flex-column bg-warning mt-3 rounded d-flex justify-content-center align-items-center'>  <h2 id="result">&#8377; {result}</h2>

      <p>Total simple interest</p>
    </div>
    <form className="mt-3" onSubmit={findInterest}>
    <div className=' mt-5 '>
    <TextField  value={amount} name="amount" fullWidth id="outlined-basic" label="&#8377; Principle Amount" variant="outlined" onChange={(e)=>validate(e)} />
    {
    !isAmount &&
    <div>
      <p className='text-danger'>Invalid input</p>
    </div>
    }
    <TextField value={interest} name="interest"className='mt-2'fullWidth id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" onChange={(e)=>validate(e)}/>
    {
    !isInterest &&
    <div>
      <p className='text-danger'>Invalid input</p>
    </div>
    }
    <TextField value={year} name="year" className='mt-2'fullWidth id="outlined-basic" label="Year (Yr)" variant="outlined" onChange={(e)=>validate(e)} />
    </div>
    {
    !isYear &&
    <div>
      <p className='text-danger'>Invalid input</p>
    </div>
    }

    <Stack direction ="row" className="mt-3" spacing={2}>
    <Button disabled={isAmount && isInterest && isYear?false:true} style={{width:"200px",height:"50px"}}  variant="contained" color="success" type ="submit" >CALCULATE</Button>
    <Button style={{color:"blue",width:"200px",height:"50px"}} variant="contained"onClick={handleReset} className='bg-light'>RESET</Button>
    </Stack>
    </form>
    </div>
    </div>
    </>
  );
}

export default App;