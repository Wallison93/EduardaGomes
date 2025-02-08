import './Contact.css'
import { MdWorkOutline,MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


export default function Contact() {




    return (
        <body className='container-fluid body-contact'>
            <h1 className='text-contact'>
                CONTACT ME
            </h1>

            <h2 className='text-hi'>
                Hi, Fashion world!
            </h2>

            <div className='div-1 text-center'>
                <h5 >
                    I'm open to new connections and opportunities! For collaborations, runway shows, or partnerships, feel free to reach out.
                </h5>
            </div>

            <div className='div-2 text-center'>
                <h5>
                    Let’s create something amazing together!
                </h5>
            </div>


            <div className='div-3 d-flex flex-column flex-md-row '>
                <div className='flex-column div-email'>
                    <MdOutlineEmail className='icone-email' />
                    <h5>sgomes.eduarda@gmail.com</h5>
                </div>

                

                <div className='flex-column div-job'>
                    <MdWorkOutline  className='icone-email' />
                    <h5>FORD MODELS</h5>
                </div>

                <div className='flex-column div-andress'>
                    <IoLocationOutline className='icone-email' />
                    <h5>Minas Gerais, Brazil</h5>
                </div>
            </div>

            <a className="contato-a">Copyright © 2025 à <strong>Eduarda Gomes</strong>. Todos os direitos reservados.</a>

<br/>



        </body>

    )
}