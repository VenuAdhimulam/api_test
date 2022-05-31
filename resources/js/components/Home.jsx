import React from "react";
import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
    background: #b6b6b6;
`;

const Wrapper = styled.div`
    width: 70%;
    padding: 20px;
    height: 100%;
    background: white;
`;

const Tilte = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const TitleDiv = styled.div`
    background-color: #192637;
    color: white;
    padding: 5px;
`;

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <TitleDiv>
                    <Tilte>Expense Management</Tilte>
                </TitleDiv>
                <ExpenseForm />
            </Wrapper>
        </Container>
    );
};

export default Home;
