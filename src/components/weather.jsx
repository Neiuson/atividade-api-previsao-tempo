import { useEffect, useState } from "react"
import api from "../api/api"

const axios = require ('axios')
const url = `${api().PROTOCOL}://${api().BASE_URL}?q=Itu&appid=${api().APPID}&lang=${api().LANGUAGE}&units=${api().UNITS}`

function Weather() {
    const [weather, setWeather] = useState([])
    const [city, setCity] = useState("")

    function getData(){
        axios.get(url)
            .then((res)=>{
                setWeather(res.data.list)
                setCity(res.data.city.name)
                console.log(res.data)
            })
            .catch((res)=>{
                console.log(res)
            }) 
     }

     function onClick(event){
    
    }

    function dataAtualFormatada(date){
        var data = new Date(date),
            dia  = data.getDate().toString().padStart(2, '0'),
            mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
            ano  = data.getFullYear();
        return dia+"/"+mes+"/"+ano;
    }

    useEffect(()=>{
        getData();
    }, [])   

    return(
        <>
            <button onClick={onClick}>alguma coisa</button>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                {weather.map((r, index)=>{
                    return(
                        <div key={index} style={{display:"flex", flexDirection:"column", width:"15%", margin:"1rem 1rem", border:"solid 1px black", padding:"4rem 1rem", borderRadius:"10px", textAlign:"center", backgroundImage:"url(https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-ceu-azul-por-causa-fenomeno-fisico-espalhamento-58c9465b0d67e.jpg)"}}>
                            <div style={{fontSize:"20px", fontWeight:"bold"}}>{city}</div>
                            <div style={{fontSize:"20px", fontWeight:"bold"}}>{"Temperatura min: " + r.main.temp_min}</div>
                            <div style={{fontSize:"20px", fontWeight:"bold"}}>{"Temperatura max: " + r.main.temp_max}</div>
                            <div style={{fontSize:"20px", fontWeight:"bold"}}>{"Descrição: " +r.weather[0].description}</div>
                            <div style={{fontSize:"20px", fontWeight:"bold"}}>{"Data: " + dataAtualFormatada(r.dt_txt)}</div>
                        </div>
                    )
                })}
                
            </div>
            
        </>
    )    
}

// getWether(){
//     return(
//         <>
//         {weather.map((element)=>{
//             return(
//                 <div>
//                 {element.main.temp_min}
//                 </div>
//                 <div>
//                     {element.main.temp_max}
//                 </div>
//                 <div>
//                     {element.weather[0].description}
//                 </div>
//             )
//         })}
//     </>
// )
// }


export default Weather
