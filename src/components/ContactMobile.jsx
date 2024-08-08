import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMobile = () => {
    const contactRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_olss207';
        const templateId = 'template_y2px66w';
        const publicKey = 'ZG1E5xa9tKUmzjDmR';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: 'Kamila',
            message: formData.message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('email sent: ', response);
                setFormData({ name: '', email: '', message: '' });

                // Exibe o toast de sucesso
                toast.success('Mensagem enviada com sucesso!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000, // 3 segundos
                });
            })
            .catch((error) => {
                console.log('email error: ', error);

                // Exibe o toast de erro
                toast.error('Erro ao enviar a mensagem. Tente novamente.', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000, // 3 segundos
                });
            });
    };

    return (
        <section id='contato' ref={contactRef} className='contact-box scale-1 flex flex-col text-amber-900 font-montserrat-bold items-center justify-center z-50 h-auto max-w-4xl mx-auto p-8 bg-amber-100 bg-opacity-60 rounded-2xl shadow-lg shadow-amber-950 mb-44 mt-48 mr-3.5 ml-3.5'>
            
            <h1 className='text-3xl mb-4 font-morgenlicht'>Contato</h1>
            <form className='contact-box' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor='name' className='block text-opacity-100'>Nome</label>
                    <input type='text' id='name' name='name' value={formData.name} onChange={handleChange}
                        className='bg-amber-100 placeholder-amber-700 bg-opacity-35 w-auto mt-1 px-4 py-2 border border-black border-opacity-50 rounded-md focus:outline-none focus:border-amber-600'
                        required />
                </div>
                <div className='mb-6'>
                    <label htmlFor='email' className='block text-opacity-100'>E-mail</label>
                    <input type='email' id='email' name='email' value={formData.email} onChange={handleChange}
                        className='bg-amber-100 bg-opacity-35 w-full mt-1 px-4 py-2 border border-black border-opacity-50 rounded-md focus:outline-none focus:border-amber-600'
                        required />
                </div>
                <div className='mb-6'>
                    <label htmlFor='message' className='block text-opacity-100'>Mensagem</label>
                    <textarea id='message' name='message' value={formData.message} onChange={handleChange} rows='4'
                        className='bg-amber-100 bg-opacity-35 w-full mt-1 px-4 py-2 border border-black border-opacity-50 rounded-md focus:outline-none min-h-36 focus:border-amber-600'
                        required></textarea>
                </div>
                <div className='text-center'>
                    <button type='submit'
                        className='bg-amber-700 font-morgenlicht text-amber-100 px-6 py-3 rounded-md hover:bg-amber-700 focus:outline-none focus:bg-amber-900'>
                        Enviar
                    </button>
                </div>
            </form>

            {/* Contêiner para os toasts */}
            <ToastContainer />
        </section>
    );
};

export default ContactMobile;
