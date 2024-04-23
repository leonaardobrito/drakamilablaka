import React from 'react';

const ContactForm = ({ handleSubmit, nameRef, phoneRef, emailRef, messageRef }) => {
    return (
        <div className={'formulario'}>
            <h2>Entre em contato</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" ref={nameRef} required/>
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" ref={emailRef} required/>
                </div>
                <div>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea id="message" ref={messageRef} required/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;