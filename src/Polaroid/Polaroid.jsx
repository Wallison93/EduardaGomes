
import './Polaroid.css';
import foto1 from '../imagensDuda/Polaroid/polaroid1.png?v=2';
import foto2 from '../imagensDuda/Polaroid/polaroid2.png?v=2';
import foto3 from '../imagensDuda/Polaroid/polaroid3.png?v=2';
import foto4 from '../imagensDuda/Polaroid/polaroid4.png?v=2';
import foto5 from '../imagensDuda/Polaroid/polaroid5.png?v=2';
import foto6 from '../imagensDuda/Polaroid/polaroid6.png?v=2';
import video1 from '../imagensDuda/Polaroid/VÍDEO1.mp4?v=2';
import video2 from '../imagensDuda/Polaroid/VÍDEO3.mp4?v=2';


export default function Polaroid(){
    return(
        <body className='container-polaroid container-fluid'>
            <br/><br/>
            <div className='container div-base-card2'>
                <div class="card shadow">
                    <video className='fotopolaroid' src={video1} loop muted autoPlay controls/>
                </div>
                <div class="card shadow">
                    <video className='fotopolaroid' src={video2} loop muted autoPlay controls/>
                </div>
            </div>
            <div className='container div-base-card'>
                <div class="card shadow">
                    <img className='fotopolaroid' src={foto1} alt='foto1'  />
                </div>
                <div class="card shadow">
                    <img className='fotopolaroid' src={foto2} alt='foto2'  />
                </div>
                <div class="card shadow">
                    <img className='fotopolaroid' src={foto3} alt='foto3'  />
                </div>
            </div>
            <div className='container div-base-card'>
                <div class="card shadow">
                    <img className='fotopolaroid' src={foto4} alt='foto4'  />
                </div>
                <div class="card shadow">
                    <img className='fotopolaroid' src={foto5} alt='foto5'  />
                </div>
                <div class="card shadow">
                    <img className='fotopolaroid' src={foto6} alt='foto6'  />
                </div>
            </div>
        </body>
    )
}