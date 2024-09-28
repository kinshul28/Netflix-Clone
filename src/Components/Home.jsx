import React, {useState, useEffect, useRef} from 'react';
// import samplecard from '../sampleCard.jpg'
import '../home.scss'

const imgbaseurl= "https://image.tmdb.org/t/p/w500";

const Home = () => {
    // let popular=[];

    // const [popular, setpopular] = useState([])
    const [nowplaying, setnowplaying] = useState([])
    const [toprated, settoprated] = useState([])    
    const [upcoming, setupcoming] = useState([])
    // const popularref= useRef([])
    
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDA0NzYyYzc3M2NkZWIxYzE2OWRkMjU4M2QxMThlNyIsIm5iZiI6MTcyMzMxODg3NS4yNjgxODMsInN1YiI6IjY1NjU5NWZiYTM0OTExMDBhYzU3OTNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PG9CE4ZCRhqpCP3CIOPk_SzeK4--IFNKZyC0nBKV-S4'
            }
          };
        
        // fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        //     .then(response => response.json())
        //     .then(response => setpopular(response.results))
        //     // .then(()=>console.log(popular))
        //     .catch(err => console.error("The following error occured in fetching popular", err));

        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setnowplaying(response.results))
            .catch(err => console.error("The following error occured in fetching nowplaying", err));

        
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => settoprated(response.results))
            .catch(err => console.error("The following error occured in fetching toprated", err));

        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setupcoming(response.results))
            .catch(err => console.error("The following error occured in fetching upcoming", err));    
    }, [])
    

  return (
        <div className='home'>
            {/* <Row ref={popularref} rowtitle="Popular" creative= {popular}/>                 */}
            <Row rowtitle="Now playing" creative= {nowplaying}/>                
            <Row rowtitle="Upcoming" creative= {upcoming}/>                
            <Row rowtitle="Top rated" creative= {toprated}/>                
        </div>
  );
}


const Card=(props)=>{
    return (
        <img className='thumbnail' src= {`${imgbaseurl}${props.imagesource}`} alt=" cover unavailable" />       
    )
}

const Row=(rowprops)=>{

    return(
        <div className='row'>
            <h3 style={{padding:"10px",boxSizing:"border-box"}}>{rowprops.rowtitle}</h3>
            <div className='thumbnailsection'>
            {
                rowprops.creative.map((element, index)=>{
                    return <Card key={index} imagesource={element.poster_path}/>
                })
            }            
            </div>            
        </div>
    )
}
    
export default Home;
// export {popularref}
