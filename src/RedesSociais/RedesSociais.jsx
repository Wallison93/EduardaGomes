import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";

import './RedesSociais.css';
import { GerarPDF } from '../PdfComposit/PdfComposit.jsx'; // Importação correta

export default function RedesSociais() {

    const irParaPinteres = () => {
        window.open("https://pt.pinterest.com/dudaasgomes/", "_blank");
    };

    function IrParaOInstagram() {
        window.open('https://www.instagram.com/duda.sgomes/', '_blank');
    }

    function IrParaOTelegram() {
        window.open('https://t.me/dudasgomes', '_blank');
    }

    function IrParaOTiktok() {
        window.open('https://www.tiktok.com/@duda.sgomes?_t=ZM-8taVHCFZmLO&_r=1', '_blank');
    }

    return (
        <div>
            <div className='d-flex text-center mt-4 container justify-content-center transparent'>   
                <button onClick={IrParaOInstagram} className='buttonRedesSociais'> 
                    <BsInstagram />
                </button>   
                <button onClick={IrParaOTelegram} className='buttonRedesSociais'> 
                    <FaTelegram />
                </button>   
                <button onClick={irParaPinteres} className='buttonRedesSociais'> 
                    <FaPinterest />
                </button>     
                <button onClick={IrParaOTiktok} className='buttonRedesSociais'> 
                    <FaTiktok />
                </button>                  
            </div>

            <div>
                <button className="button-download" onClick={GerarPDF}>
                    <IoMdCloudDownload className="icone-download"/>
                    <p className="mt-3">Download my Composit as PDF</p>
                </button>
            </div>
        </div>
    );
}
