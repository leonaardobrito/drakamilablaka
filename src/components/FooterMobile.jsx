
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const FooterMobile = () => {

    const handleInstagramClick = () => {
        window.open('https://instagram.com/dra.kamilablaka', '_blank');
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = "+5548996192691";
        // Open WhatsApp chat with the specified phone number
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };

    return (
        <section className="fixed bottom-8 right-8 z-50">
            <button
                onClick={handleInstagramClick}
                className="rounded-full h-14 w-14 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 border-none cursor-pointer flex items-center justify-center"
            >
                <FaInstagram className="text-white scale-150" />
            </button>

            <button
                onClick={handleWhatsAppClick}
                className="rounded-full h-14 mt-2 w-14 bg-green-600 border-none cursor-pointer flex items-center justify-center"
            >
                <FaWhatsapp className="text-white scale-150" />
            </button>
        </section>
    )
}

export default FooterMobile;