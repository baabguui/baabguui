import { createGlobalStyle } from "styled-components";
import NotoSansKROTFBlack from "../../assets/fonts/NotoSansKR-Black.otf";
import NotoSansKROTFBold from "../../assets/fonts/NotoSansKR-Bold.otf";
import NotoSansKROTFLight from "../../assets/fonts/NotoSansKR-Light.otf";
import NotoSansKROTFMedium from "../../assets/fonts/NotoSansKR-Medium.otf";
import NotoSansKROTFRegular from "../../assets/fonts/NotoSansKR-Regular.otf";
import NotoSansKROTFThin from "../../assets/fonts/NotoSansKR-Thin.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'NotoSansKROTFBlack';
        src: local('NotoSansKROTFBlack'),local('NotoSansKROTFBlack');
        font-style:normal;
        src: url(${NotoSansKROTFBlack}) format('truetype');
    }
    @font-face {
        font-family: 'NotoSansKROTFBold';
        src: local('NotoSansKROTFBold'),local('NotoSansKROTFBold');
        font-style:normal;
        src: url(${NotoSansKROTFBold}) format('truetype');
    }
    @font-face {
        font-family: 'NotoSansKROTFLight';
        src: local('NotoSansKROTFLight'),local('NotoSansKROTFLight');
        font-style:normal;
        src: url(${NotoSansKROTFLight}) format('truetype');
    }@font-face {
        font-family: 'NotoSansKROTFMedium';
        src: local('NotoSansKROTFMedium'),local('NotoSansKROTFMedium');
        font-style:normal;
        src: url(${NotoSansKROTFMedium}) format('truetype');
    }@font-face {
        font-family: 'NotoSansKROTFRegular';
        src: local('NotoSansKROTFRegular'),local('NotoSansKROTFRegular');
        font-style:normal;
        src: url(${NotoSansKROTFRegular}) format('truetype');
    }@font-face {
        font-family: 'NotoSansKROTFThin';
        src: local('NotoSansKROTFThin'),local('NotoSansKROTFThin');
        font-style:normal;
        src: url(${NotoSansKROTFThin}) format('truetype');
    }
`;
