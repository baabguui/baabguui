import {
    HeaderContainer,
    HeaderDot,
    HeaderMenuItem,
    HomeDot,
} from "../../styles/common/header-style";
import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../../routes/.";
import { useState } from "react";
function Header() {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState<Boolean>(true);

    function handleClick(e: React.ChangeEvent<any>) {
        e.preventDefault();
        window.location.href = "/";
    }
    return (
        <div>
            <HeaderDot
                onClick={() => {
                    setOpen((isOpen) => !isOpen);
                }}
            />

            <HomeDot onClick={handleClick}></HomeDot>

            {isOpen ? (
                <HeaderContainer>
                    <HeaderMenuItem to={ROUTES.CV.path}></HeaderMenuItem>
                    <HeaderMenuItem to={ROUTES.Contact.path}>
                        contact
                    </HeaderMenuItem>
                    <HeaderMenuItem to={ROUTES.TwentyThree.path}>
                        2023
                    </HeaderMenuItem>
                    <HeaderMenuItem to={ROUTES.TwentyTwo.path}>
                        2022
                    </HeaderMenuItem>
                    <HeaderMenuItem to={ROUTES.TwentyOne.path}>
                        2021
                    </HeaderMenuItem>
                    <HeaderMenuItem to={ROUTES.Sculpture.path}>
                        Sculpture
                    </HeaderMenuItem>
                    <HeaderMenuItem to={ROUTES.Drawing.path}>
                        Drawing
                    </HeaderMenuItem>
                </HeaderContainer>
            ) : (
                <p />
            )}
        </div>
    );
}

export default Header;
