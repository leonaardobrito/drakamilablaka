
import {FaWhatsapp} from "react-icons/fa";

const FooterMobile = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = "+5547991054009";
        // Open WhatsApp chat with the specified phone number
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };

    return (
        <section className="fixed bottom-8 right-8 z-50">
            <button
                onClick={handleWhatsAppClick}
                className="rounded-full h-14 w-14 bg-green-600 border-none cursor-pointer flex items-center justify-center"
            >
                <FaWhatsapp className="text-white scale-150"/>
            </button>
        </section>
    )
}

export default FooterMobile;