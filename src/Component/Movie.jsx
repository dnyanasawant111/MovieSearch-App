import React from 'react'

const Movie = (props) => {
  return (
    <div className='movie'>

      {
        props.movie.map((ele)=>{
          return(
            <div >

              <div> <img className='img' src={ele.Poster}
/></div>


            </div>
          )
        })
      }
    </div>
  )
}

export default Movie