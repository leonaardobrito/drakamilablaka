import React, { useRef, useState, useEffect } from 'react';
// import { FaBars, FaHome, FaUserGraduate, FaInfoCircle, FaWhatsapp } from 'react-icons/fa';
import Navbar from './Navbar';
import bg from '/img/autumnMobile.png'

function ExperienceMobile() {

    const styles = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
    }

    return (
        <main className={'h-screen w-screen'} style={styles}>
            <Navbar />
        </main>
    )

}

export default ExperienceMobile;