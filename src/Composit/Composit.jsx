import './Composit.css';
import foto1 from "../imagensDuda/composit/1.webp"
import foto2 from "../imagensDuda/composit/2-2.webp"
import foto3 from "../imagensDuda/composit/3.webp"
import foto4 from "../imagensDuda/composit/4-2.webp"
import foto5 from "../imagensDuda/composit/5-2.webp"


export default function Composit(){
    return(
        <body className='container-composit container-fluid d-flex flex-md-row flex-column justify-content-center align-items-center'>

            <div className='col-md-3 '>
                <img className='foto1-composit' src={foto1} alt='foto1'/>

            </div>

            <div className='col-md-4  '> 
                <div className='d-flex  div-composit-ft'>
                    <img className='foto-composit' src={foto2} alt='foto2'/>
                    <img className='foto-composit' src={foto3} alt='foto3'/>
                </div>

                <div className='d-flex    div-composit-ft'>
                    <img className='foto-composit' src={foto4} alt='foto4'/>
                    <img className='foto-composit' src={foto5} alt='foto5'/>
                </div>
            </div>
           
        </body>
    )
}