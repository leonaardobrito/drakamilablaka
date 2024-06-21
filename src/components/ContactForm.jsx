import React, { useRef } from 'react';

const ContactForm = () => {

    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        };
        // Send formData to the desired email address
        console.log(formData);
        // Optionally, you can use Axios or Fetch API to send a POST request to a backend endpoint
    };

    return (
        <div className={'formulario'}>
            <h2>Entre em contato</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input title="Campo obrigatório." type="text" id="name" ref={nameRef} required />
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" ref={emailRef} required title="Campo obrigatório."/>
                </div>
                <div>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea id="message" ref={messageRef} required title="Campo obrigatório."/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;