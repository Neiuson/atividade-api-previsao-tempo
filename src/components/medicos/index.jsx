import { useState } from "react"
import MuriloRobertoCosta from "../../assets/images/MuriloRobertoCosta.jpg"
import HenriqueFilhoPassos from "../../assets/images/HenriqueFilhoPassos.jpg"
import "../../assets/css/medicos/index.css"

function Medicos(){

    // usando a funcao useState para declarar um array de objetos "privado"
    const [medicos, setMedicos] = useState([
            {"nome": "Murilo Roberto Costa", "foto":MuriloRobertoCosta},
            {"nome": "Henrique Filho Passos", "foto":HenriqueFilhoPassos},
            {"nome": "Sonia de Almeida Silva", "foto":"https://blog.iclinic.com.br/wp-content/uploads/2019/10/remuneracao-e-satisfacao-dos-medicos.jpg"}
         
        ])

    const [style, setStyle] = useState({
        "container_principal": {
            "margin":"2% 2%",
            "display":"flex",
            "flex-direction":"column",
            "align-items": "center",
            "border":"1px solid black",
            "border-radius":"5px",
            "background-color": "rgb(240, 230, 260)"
        }
    })    

    return (
        <>
            <div style={style.container_principal}>
                <h1>Profissionais da Saúde</h1>
                <div style={{"display":"flex",
                "justify-content": "space-around",
                "border": "1px solid rgb(175, 188, 190)  ",
                "border-radius":"5px",
                "margin":" 1em 1em",
                "width":"96%"
                
                }}>
                    {}
                    {/* loop dentro do array medicos retornando uma div para cada objectos */}
                    {medicos.map((medico, index)=>{
                        return (
                            <div key={index} className="medico_container">
                                <img src={medico.foto} alt="" className="medico_photo"/>
                                <p className="medico_name">{medico.nome}</p>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default Medicos