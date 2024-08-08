import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const formRef = useRef();

    const serviceId = 'service_olss207';
    const templateId = 'template_y2px66w';
    const publicKey = 'ZG1E5xa9tKUmzjDmR';
    //k
    // const serviceId = 'service_bxf396b';
    // const templateId = 'template_7wfk3tk';
    // const publicKey = 'SDcgJoayxpoBlkU-T';

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((response) => {
                console.log('Email sent successfully:', response);
                formRef.current.reset();
                alert('Mensagem enviada com sucesso!');
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Erro ao enviar a mensagem. Tente novamente.');
            });
    };

    return (
        <div className="formulario">
            <h2>Entre em contato</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        title="Campo obrigatório." 
                        type="text" 
                        id="name" 
                        name="from_name" 
                        required 
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="from_email" 
                        required 
                        title="Campo obrigatório." 
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />
                </div>
                <div>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
                        title="Campo obrigatório." 
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
