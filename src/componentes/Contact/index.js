import React from "react";
import './styles.css';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon} from '@heroicons/react/24/solid';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';
import logoGitHub from '../img/Logogithub.png';
import logoLinke from '../img/Logolinkedin.png';

function Contact(){

    const handleFollowLinke = () =>{
        window.open('https://www.linkedin.com/in/diego-acosta-1472731b4/', '_blank');
    }
    const handleFollowGitHub =() =>{
        window.open('https://github.com/Dacosta96', '_blank');
    }

    return(
    <>
        <div className="contact">
            <h1>Contact Me</h1> 

        <div className="info">

            <div>
                <DevicePhoneMobileIcon className="iconContac"/>
                <p>Phone <br/> 3245423237 </p>
            </div>
            <div>
                <EnvelopeIcon className="iconContac"/>
                <p>Email <br/> diego.ac9614@gmail.com </p>
            </div>
            <div>
                <ChatBubbleBottomCenterTextIcon className="iconContac"/>
                <p>Follow Me <br/> <img className='logoFollow' src={logoGitHub} alt='img' onClick={handleFollowGitHub}/> 
                    <img className='logoFollow' src={logoLinke} alt='img' onClick={handleFollowLinke} /></p>
            </div>
            
        </div>

        <div className="send"><button>Enviar Mensaje</button></div>
        </div>
    </>
    )
}

export {Contact};