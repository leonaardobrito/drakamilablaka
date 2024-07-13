import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleClickOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("data-target");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="h-[90px] md:fixed flex w-full items-center px-6">
            <img
                src='/logoK.png'
                alt='Logo'
                className="z-50 h-[70px] md:mt-8 md:h-[100px] w-auto bg-white bg-opacity-30 pl-2 pr-2 fixed left-5 border rounded-2xl border-none"
            />
            <div className={isOpen ? "pt-4 pb-4 items-center rounded-2xl md:w-auto md:left-auto md:right-auto left-0 right-0 m-auto bg-opacity-40 bg-white md:bg-transparent w-[80%] duration-300 grow flex justify-end md:gap-8 gap-2 absolute md:relative flex-col md:flex-row top-[10%] md:top-[inherit]" : "grow flex justify-end gap-8 absolute md:relative flex-col md:flex-row top-[-100%] md:top-[inherit] duration-200"}>
                <a
                    href="#inicio"
                    className="scroll-btn transform hover:scale-125 hover:text-amber-700 md:top-6 md:right-10 md:text-amber-50 text-amber-900 text-[28px] font-morgenlicht"
                    data-target="#inicio"
                    onClick={scrollToSection}
                >
                    Início
                </a>
                <a
                    href="#sobre"
                    className="scroll-btn transform hover:scale-125 hover:text-amber-700 md:top-6 md:right-40 md:text-amber-50 text-amber-900 text-[28px] font-morgenlicht"
                    data-target="#sobre"
                    onClick={scrollToSection}
                >
                    Sobre
                </a>
                <a
                    href="#contato"
                    className="scroll-btn transform hover:scale-125 hover:text-amber-700 md:top-6 md:right-80 md:text-amber-50 text-amber-900 text-[28px] font-morgenlicht"
                    data-target="#contato"
                    onClick={scrollToSection}
                >
                    Contato
                </a>
            </div>
            <div
                ref={menuRef}
                className="text-2xl md:hidden fixed right-5 justify-end grow"
                onClick={handleClickOpen}
            >
                <AiOutlineMenu className="cursor-pointer text-amber-100" size={30} />
            </div>
        </nav>
    );
}

export default NavbarMobile;