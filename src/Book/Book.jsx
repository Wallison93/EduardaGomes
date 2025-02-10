import './Book.css';
import f1 from '../imagensDuda/book/1.png?v=2'
import f2 from '../imagensDuda/book/2.png?v=2'
import f3 from '../imagensDuda/book/3.png?v=2'
import f4 from '../imagensDuda/book/4.png?v=2'
import f5 from '../imagensDuda/book/5.png?v=2'
import f6 from '../imagensDuda/book/6.png?v=2'
import f7 from '../imagensDuda/book/7.png?v=2'
import f8 from '../imagensDuda/book/8.png?v=2'
import f9 from '../imagensDuda/book/9.png?v=2'
import f10 from '../imagensDuda/book/10.png?v=2'
import f11 from '../imagensDuda/book/11.png?v=2'
import f12 from '../imagensDuda/book/12.png?v=2'
import f13 from '../imagensDuda/book/13.png?v=2'
import f14 from '../imagensDuda/book/14.png?v=2'
import f15 from '../imagensDuda/book/15.png?v=2'
import f16 from '../imagensDuda/book/16.png?v=2'
import f17 from '../imagensDuda/book/17.png?v=2'
import f18 from '../imagensDuda/book/18.png?v=2'
import f19 from '../imagensDuda/book/19.png?v=2'
import f20 from '../imagensDuda/book/20.png?v=2'
import f21 from '../imagensDuda/book/21.png?v=2'
import f22 from '../imagensDuda/book/22.png?v=2'
import f23 from '../imagensDuda/book/23.png?v=2'
import f24 from '../imagensDuda/book/24.png?v=2'
import f25 from '../imagensDuda/book/25.png?v=2'


export default function Book() {
    return (
        <body className='container-book container-fluid'>
            <br /><br />
            <div className='container-fluid div-base-card-book'>
                <div class="card-book shadow">
                    <img className='fotobook' src={f1} alt='foto1' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f2} alt='foto2' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f3} alt='foto3' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f5} alt='foto5' loading="lazy" />
                </div>
            </div>

            <div className='container-fluid div-base-card-book'>
                <div class="card-book shadow">
                    <img className='fotobook' src={f6} alt='foto1' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f7} alt='foto2' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f8} alt='foto3' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f9} alt='foto5' loading="lazy"/>
                </div>
            </div>

            <div className='container-fluid div-base-card-book'>
                <div class="card-book shadow">
                    <img className='fotobook' src={f14} alt='foto1' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f11} alt='foto2'loading="lazy" />
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f12} alt='foto3' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f13} alt='foto5' loading="lazy"/>
                </div>
            </div>


            <div className='container-fluid div-base-card-book'>
                <div class="card-book shadow">
                    <img className='fotobook' src={f10} alt='foto1' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f18} alt='foto1' loading="lazy"/>
                </div>

                <div class="card-book shadow">
                    <img className='fotobook' src={f16} alt='foto3' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f17} alt='foto5' loading="lazy"/>
                </div>
            </div>

            <div className='container-fluid div-base-card-book'>
            <div class="card-book shadow">
                    <img className='fotobook' src={f15} alt='foto2' loading="lazy"/>
                </div>

                <div class="card-book shadow">
                    <img className='fotobook' src={f19} alt='foto2' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f20} alt='foto3' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f21} alt='foto5' loading="lazy"/>
                </div>
            </div>

            <div className='container-fluid div-base-card-book'>
                <div class="card-book shadow">
                    <img className='fotobook' src={f22} alt='foto1' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f23} alt='foto2' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f24} alt='foto3' loading="lazy"/>
                </div>
                <div class="card-book shadow">
                    <img className='fotobook' src={f25} alt='foto5' loading="lazy"/>
                </div>
            </div>

        </body>
    )
}