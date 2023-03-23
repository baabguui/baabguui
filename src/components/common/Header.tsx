import {
    HeaderContainer,
    MenuContainer,
    HeaderDot,
    HeaderMenuItem,
    HomeDot,
    MyName,
} from "../../styles/common/header-style";
import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../../routes/.";
import React, { useEffect, useState } from "react";
function Header() {
    const [isOpen, setOpen] = useState<Boolean>(true);
    const [isActive, setIsActive] = useState("none");
    // 로컬스토리지에 위에거 다 저장해두고 useEffect로 새로고침 시 스토리지 데이터로 useState에 저장되도록
    function handleClick(e: React.ChangeEvent<any>) {
        e.preventDefault();
        window.location.href = "/";
        window.localStorage.setItem("menu", "none");
        window.localStorage.setItem("sub-menu", "three");
    }

    useEffect(() => {
        const data: any = localStorage.getItem("menu");
        setIsActive(data);
    }, []);

    function activeMenu(menu: string) {
        if (isActive == menu) {
            window.localStorage.setItem("menu", menu);
            return "check";
        }
    }

    return (
        <HeaderContainer>
            {isOpen ? (
                <MenuContainer>
                    <HeaderDot
                        onClick={() => {
                            setOpen((isOpen) => !isOpen);
                        }}
                    />
                    <HeaderMenuItem
                        className={activeMenu("CV")}
                        to={ROUTES.CV.path}
                        onClick={() => {
                            setIsActive("CV");
                        }}
                    >
                        CV
                    </HeaderMenuItem>
                    <HeaderMenuItem
                        className={activeMenu("contact")}
                        to={ROUTES.Contact.path}
                        onClick={() => {
                            setIsActive("contact");
                        }}
                    >
                        contact
                    </HeaderMenuItem>
                    <HeaderMenuItem
                        className={activeMenu("2023")}
                        to={ROUTES.TwentyThree.path}
                        onClick={() => {
                            setIsActive("2023");
                        }}
                    >
                        2023
                    </HeaderMenuItem>
                    <HeaderMenuItem
                        className={activeMenu("2022")}
                        to={ROUTES.TwentyTwo.path}
                        onClick={() => {
                            setIsActive("2022");
                        }}
                    >
                        2022
                    </HeaderMenuItem>
                    <HeaderMenuItem
                        className={activeMenu("2021")}
                        to={ROUTES.TwentyOne.path}
                        onClick={() => {
                            setIsActive("2021");
                        }}
                    >
                        2021
                    </HeaderMenuItem>
                    <HeaderMenuItem
                        className={activeMenu("Installation")}
                        to={ROUTES.Installation.path}
                        onClick={() => {
                            setIsActive("Installation");
                        }}
                    >
                        Installation
                    </HeaderMenuItem>
                    <HeaderMenuItem
                        className={activeMenu("Sculpture")}
                        to={ROUTES.Sculpture.path}
                        onClick={() => {
                            setIsActive("Sculpture");
                        }}
                    >
                        Sculpture
                    </HeaderMenuItem>
                    <HeaderMenuItem
                        className={activeMenu("Drawing")}
                        to={ROUTES.Drawing.path}
                        onClick={() => {
                            setIsActive("Drawing");
                        }}
                    >
                        Drawing
                    </HeaderMenuItem>
                </MenuContainer>
            ) : (
                <MenuContainer>
                    <HeaderDot
                        onClick={() => {
                            setOpen((isOpen) => !isOpen);
                        }}
                    />
                </MenuContainer>
            )}
            <MyName>Im JI WON</MyName>
            <HomeDot onClick={handleClick}></HomeDot>
        </HeaderContainer>
    );
}

export default Header;
