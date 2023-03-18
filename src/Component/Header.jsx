import React,{useState,useEffect} from 'react';
import Movie from './Movie'
import Axios from 'axios'


 export default function Header(props){
    const [search,setSearch]=useState("")

    const [movie,setMovie]=useState([])

  

    function change(event){
setSearch(event.target.value)
    }

    async function getData (){
        const result=await Axios.get(`https://www.omdbapi.com/?s=${search}&apikey=5db58338`)
     console.log(result)
        setMovie(result.data.Search)
          
        }

        async function getData1 (){
            const result=await Axios.get(`https://www.omdbapi.com/?s=avenger&apikey=5db58338`)
           console.log(result)
            setMovie(result.data.Search)
              
            }
    
        
    
            function add(){
                    getData()
                
                
            }
            useEffect(()=>{
                if(search.length==0){
                    getData1()
                }
            },[search])
              
    return (
        <div > 
     <div className='Header'>    
 <h1 className='label'>  <img className="rounded-circle"width="90px" height="90px" src="https://www.fortech.org/wp-content/uploads/2020/07/Best-Free-Movie-Apps-to-Watch-Movies-Online.jpg"/><strong>  Search Your Favourite Movie </strong></h1>
<div>
<br/> 

    <input className="form-control" value={search} onChange={change} type="text" placeholder=' Enter movie name '/><br/> 

    <div class="d-grid gap-4 col-4 mx-auto ">
  
  <button class="btn btn-primary" type="button" onClick={add}>Search For Movie </button>
  </div >
</div>
<br/> <br/>

 <Movie movie={movie}/> 
  
    
   
    
</div>

        </div>
    )
 }