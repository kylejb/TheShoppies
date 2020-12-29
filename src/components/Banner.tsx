import styled from "styled-components";

const BannerDiv = styled.div``;


const Banner = () => {
    return (
        <BannerDiv>
            <span>You have reached limit. If you want to nominate MOVIE, please remove a nominated movie before reattempting.</span>
        </BannerDiv>
    );
};

export default Banner;