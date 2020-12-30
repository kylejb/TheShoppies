import styled from "styled-components";

const BannerHeader = styled.h3`
    background-color: orange;
`;


const Banner = () => {
    return (
        <BannerHeader>
            Thank you for nominating five movies. If you would like to make a change, please remove a nominated movie first.
        </BannerHeader>
    );
};

export default Banner;