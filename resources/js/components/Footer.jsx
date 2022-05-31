import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    color: white;
    background-color: #19273a;
`;

const Left = styled.div`
    flex: 1;
    margin-left: 10px;
`;

const Logo = styled.h5`
    flex: 1;
    margin: 0;
    padding: 10px;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
    float: right;
`;

const SocialIcon = styled.a`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Find the substance use treatment you need</Logo>
            </Left>
            <Center></Center>
            <Right>
                <SocialContainer>
                    <SocialIcon href="https://www.facebook.com/Drughelp.careApp/">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon href="https://twitter.com/DrughelpC">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon href="https://www.linkedin.com/company/drughelp-care/">
                        <LinkedIn />
                    </SocialIcon>
                </SocialContainer>
            </Right>
        </Container>
    );
};

export default Footer;
