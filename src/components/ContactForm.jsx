import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const formRef = useRef();

    const serviceId = 'service_bxf396b';
    // const templateId = 'template_y2px66w';
    const templateId = 'template_7wfk3tk';
    // const publicKey = 'ZG1E5xa9tKUmzjDmR';
    const publicKey = 'SDcgJoayxpoBlkU-T';

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((response) => {
                // console.log('Email sent successfully:', response);
                formRef.current.reset();
                toast.success('Mensagem enviada com sucesso!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
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
            <ToastContainer
                position="center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ContactForm;



// import React, { useRef } from 'react';

// const ContactForm = () => {
//     const nameRef = useRef();
//     const phoneRef = useRef();
//     const emailRef = useRef();
//     const messageRef = useRef();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formData = {
//             name: nameRef.current.value,
//             phone: phoneRef.current.value,
//             email: emailRef.current.value,
//             message: messageRef.current.value
//         };
//         // Send formData to the desired email address
//         console.log(formData);
//         // Optionally, you can use Axios or Fetch API to send a POST request to a backend endpoint
//     };

//     return (
//         <div className="formulario">
//             <h2>Entre em contato</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Nome:</label>
//                     <input title="Campo obrigatório." type="text" id="name" ref={nameRef} required style={{
//                             backgroundColor: 'white',
//                             color: 'black'
//                         }}/>
//                 </div>
//                 <div>
//                     <label htmlFor="email">E-mail:</label>
//                     <input type="email" id="email" ref={emailRef} required title="Campo obrigatório." style={{
//                             backgroundColor: 'white',
//                             color: 'black'
//                         }}/>
//                 </div>
//                 <div>
//                     <label htmlFor="message">Mensagem:</label>
//                     <textarea 
//                         id="message" 
//                         ref={messageRef} 
//                         required 
//                         title="Campo obrigatório." 
//                         style={{
//                             backgroundColor: 'white',
//                             color: 'black'
//                         }}
//                     />
//                 </div>
//                 <button type="submit">Enviar</button>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;
