
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import './RedesSociais.css'

export default function RedesSociais() {

    const irParaPinteres = () => {
        window.open(
          "https://pt.pinterest.com/dudaasgomes/", "_blank"
        );
      };

      function IrParaOInstagram(){
        window.open('https://www.instagram.com/duda.sgomes/', '_blank');
    }

    function IrParaOTelegram(){
        window.open('https://t.me/dudasgomes', '_blank');
    }

    function IrParaOTiktok(){
        window.open('https://www.tiktok.com/@duda.sgomes?_t=ZM-8taVHCFZmLO&_r=1', '_blank');
    }

    return(
        <div>
            <div className='d-flex text-center mt-4 container justify-content-center transparent'>   
                <button onClick={()=>IrParaOInstagram()} className='buttonRedesSociais'> 
                        <BsInstagram className="  "/>
                </button>   
                <button onClick={()=>IrParaOTelegram()} className='buttonRedesSociais'> 
                        <FaTelegram  className=" "/>
                </button>   
                <button onClick={()=>irParaPinteres()} className='buttonRedesSociais'> 
                        <FaPinterest className=" "/>
                </button>     
                <button onClick={()=>IrParaOTiktok()} className='buttonRedesSociais'> 
                        <FaTiktok className=" "/>
                </button>                  
            </div>


        </div>

    )
}