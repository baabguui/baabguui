import React, { useEffect, useState, useRef } from "react";
import {
    YearContainer,
    MenuItem,
    ImageContainer,
    ImageItem,
    MenuContainer,
} from "../styles/year-style";

function TwentyThree() {
    const imageList: any = {
        quest: {
            name: "<Quest> 갤러리 인",
            datas: "quest_foreground",
        },
        tilt: { name: "<틸트 창>", datas: "tilt" },
        pillar: { name: "<이어진 기둥>", datas: "pillar" },
        welcome: { name: "<welcome>", datas: "welcome" },
        graylight: { name: "<회색 등>", datas: "graylight" },
        shadow: { name: "<그림자>", datas: "shadow" },
        window: { name: "<창문>", datas: "window" },
        multitab: { name: "<의자 아래>", datas: "multitab" },
        corner: { name: "<모서리>", datas: "corner" },
        pillarDrawing: { name: "<천장방>", datas: "pillarDrawing" },
        doors: { name: "<문>", datas: "doors" },
        tables: { name: "<삼각형>", datas: "tables" },
        welcomeDrawing: { name: "<발판>", datas: "welcomeDrawing" },
    };

    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const [isCheck, setIsCheck] =
        useState<React.SetStateAction<string | null>>("none");

    const options = {
        threshold: 0.1,
    };
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;

                const datasrc = img.getAttribute("data-src");
                if (!(entry.target instanceof HTMLImageElement)) {
                    return;
                }
                if (datasrc) {
                    img.src = datasrc;
                }
                if (img.getAttribute("id")) {
                    const menu: string | null = img.getAttribute("id");
                    setIsCheck(menu);
                }

                observer.unobserve(entry.target);
            }
        });
    }, options);

    const target = document.querySelectorAll("img");

    target.forEach((target) => {
        if (!(target instanceof HTMLImageElement)) {
            return;
        }
        if (!(typeof target.src == "string")) {
            return;
        }
        io.observe(target);
    });

    useEffect(() => {
        const data: any = localStorage.getItem("sub-menu");
        setIsCheck(data);
    }, []);

    function moveToMenu(index: number) {
        imageRefs?.current[index]?.scrollIntoView({
            behavior: "smooth",
        });
    }

    function handleClick(params: string) {
        setIsCheck(params);
    }

    function activeMenu(params: string) {
        if (isCheck == params) {
            window.localStorage.setItem("sub-menu", params);
            return "check";
        }
    }

    function findName(idx: number) {
        const keyName = Object.keys(imageList)[idx];
        return imageList[keyName].name;
    }

    return (
        <YearContainer>
            <MenuContainer>
                {imageRefs.current.map((menu, idx: number) => {
                    return (
                        <MenuItem
                            key={idx}
                            className={activeMenu(Object.keys(imageList)[idx])}
                            onClick={() => {
                                moveToMenu(idx);
                                handleClick(Object.keys(imageList)[idx]);
                            }}
                            style={{ fontSize: "1.1rem" }}
                        >
                            {findName(idx)}
                        </MenuItem>
                    );
                })}
            </MenuContainer>
            <ImageContainer>
                {Object.keys(imageList).map((image: string, idx: number) => {
                    return (
                        <ImageItem
                            key={idx}
                            id={image}
                            ref={(element) => {
                                imageRefs.current[idx] = element;
                            }}
                            data-src={`/images/${imageList[image].datas}.png`}
                        />
                    );
                })}
            </ImageContainer>
        </YearContainer>
    );
}

export default TwentyThree;
