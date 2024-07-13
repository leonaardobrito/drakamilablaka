const MidSectionMobile = () => {
    return (
        <section id="inicio" className="flex items-start justify-center h-screen ">
            <div className="text-start ml-7 mt-20 md:mt-24">
                <div 
                    className="text-2xl text-amber-950 z-50 font-montserrat-500"
                    style={{ textShadow: '1px 2px 5px rgba(255,255,255, 0.7)' }}
                >
                    Olhar a floresta além da árvore
                </div>
                <div 
                    className="text-[3.1rem] md:text-7xl text-amber-700 font-morgenlicht z-50 mb-8"
                    style={{ textShadow: '5px 2px 15px rgba(0, 0, 0, 0.6)' }}
                >
                    ver você além <br />
                    dos seus exames
                </div>
                <div className="relative inline-block mt-16">
                    <div 
                        className="absolute inset-0 bg-amber-700 rounded-full z-0"
                        style={{ width: '100%', height: '100%', left: '0%', top: '0%' }}
                    ></div>
                    <img 
                        src="/img2.png" 
                        alt="Imagem" 
                        className="relative z-10 w-56 h-56 md:w-90 md:h-90 rounded-full" 
                    />
                </div>
            </div>
        </section>
    );
}

export default MidSectionMobile;

// const MidSection = () => {

//     return (
//         <>
//             <section id="inicio" className="mid-sec section ml-6 mt-[20vh] items-center justify-center h-screen ">
//                 <div className="text-xl text-amber-950 z-50 font-montserrat-500 font-black ">
//                     Olhar a floresta além da árvore
//                 </div>
//                 <div className="text-[2.8rem] md:text-7xl text-amber-700 font-morgenlicht z-50 ">
//                     ver você além <br/>
//                     dos seus exames
//                 </div>
//             </section>
//         </>
//     )
// }


// export default MidSection;

