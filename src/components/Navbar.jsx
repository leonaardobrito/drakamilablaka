import React from 'react';

import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {


    return (
        <div className="h-[4rem] bg-black text-white w-screen flex items-center">
            <div className='w-full xl:max-w-[900] mx-auto px-6'>
                <ul className="w-full lg:flex items-center justify-start space-x-4">
                    <li className="cursor-pointer font-medium hover:text-gray-900">
                        Home
                    </li>
                    <li className="cursor-pointer font-medium hover:text-gray-900">
                        About
                    </li>
                    <li className="cursor-pointer font-medium hover:text-gray-900">
                        Contact
                    </li>
                </ul>
                <AiOutlineMenu size={20} className="lg:hidden lg:ml-auto" />
            </div>
        </div>
    )
}



// import React, { useState } from 'react'
// import {Link} from "react-router-dom";
// import { FaBars, FaHome, FaUserGraduate, FaInfoCircle, FaWhatsapp } from 'react-icons/fa'
// import './Navbar.css';
//
// const Navbar = () => {
//
//     const [isOpen, setIsOpen] = useState(false);
//
//     const handleClickOpen = () => setIsOpen(!isOpen);
//     const handleClose = () => setIsOpen(false);
//
//     return(
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div className="navbar-container">
//                     <Link className="navbar-logo" to="/" >
//                         <img src='/logoK.png' alt='Logo' style={{width: '90px', height: 'auto'}}/>
//                     </Link>
//                     <div className="menu-icon" onClick={handleClickOpen}>
//                         <i className={ isOpen ?  "fa-times" :"fas fa-bars"} />
//                     </div>
//                         <ul className={ isOpen ? "nav-menu active" :"nav-menu"}>
//                             <li className="nav-item">
//                                 <Link className="nav-links" to="/">
//                                     Início
//                                 </Link>
//                             </li>
//                         </ul>
//                 </div>
//             </nav>
//         </>
//     )
// }


// import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
// import { FaBars, FaHome, FaUserGraduate, FaInfoCircle, FaWhatsapp } from 'react-icons/fa'
//
//
//   const [openMenu, setOpenMenu] = useState(false)
//   const menuOptions = [
//     {
//       text: 'Início'
//     },
//     {
//       text: 'Sobre'
//     },
//     {
//       text: 'Qualificações'
//     },
//     {
//       text: 'Contato'
//     }
//   ]
//
//
//
//
//   return (
//     // style={{ position: 'fixed', top: '10px', left: '10px', zIndex: '10' }}
//     <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', left: '15px', marginRight:'20px'}}>
//       <div className='nav-logo-container' >
//         <img src='/logoK.png' alt='Logo' style={{ width: '90px', height: 'auto' }} />
//       </div>
//
//       <div className="navbar-links-container">
//         <a href="" rel="noopener noreferrer">Sobre</a>
//         <a href="" rel="noopener noreferrer">Qualificações</a>
//         <a href="" rel="noopener noreferrer">Contato</a>
//       </div>
//       <div className="navbar-menu-container">
//         <FaBars onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
//         <Box style={{backgroundColor:"brown"}}
//         sx={{width:250}}
//              role='presentation'
//              onClick={() => setOpenMenu(false)}
//              onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </nav>
//   )
// }

export default Navbar