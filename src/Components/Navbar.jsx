import React from 'react'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Logo from "../Assets/myLogo.png";
import { Link } from "react-scroll";
import "./Navbar.css"
function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [selectedMenu, setSelectedMenu] = React.useState("Home");
    const menuItems = [
        "Home",
        "Skills",
        "Projects",
        "About",
        "Links",
    ];
    const handleMenuItemClick = (item) => {
        setSelectedMenu(item);
    };
    return (
        <div className='mainbox'>
            <Navbar
                className='nav'
                // isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarBrand>
                        <img src={Logo} className='logo cursor-pointer' alt="" />
                    </NavbarBrand>
                    <NavbarMenuToggle className='Navtoggle' aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>


                <NavbarContent className="hidden sm:flex gap-4 text" justify="end">
                    <NavbarBrand justify="center">
                        <img src={Logo} className='logo  cursor-pointer' alt="" />
                    </NavbarBrand>

                    <div className="rightmenu flex  ">
                        {menuItems.map((item, index) => (
                            <Link
                                key={item}
                                to={item.toLowerCase()}
                                spy={true}
                                smooth={true}
                                duration={500}
                                className={`w-full text-white`}
                            >
                                <h1
                                    key={item}
                                    className={`mymenu font-semibold text-lg cursor-pointer ${item === selectedMenu ? 'selected' : ''}`}
                                    onClick={() => handleMenuItemClick(item)}
                                >
                                    {item}
                                </h1>
                            </Link>))}
                    </div>
                </NavbarContent>



                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>


        </div>
    )
}

export default NavBar