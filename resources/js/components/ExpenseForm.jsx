import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: ${(props) =>
        props.type === "coloumn" ? "coloumn" : "row"};
`;

const Left = styled.div`
    flex: 1;
    padding: 5px;
`;

const Center = styled.div`
    flex: 1;
    padding: 5px;
`;

const Input = styled.input`
    flex: 1;
    min-width: 100%;
    margin: 10px 0px;
    padding: 10px;
    outline: none;
    border: 1px solid #192637;
    border-radius: 5px;
`;

const Right = styled.div`
    flex: 1;
    padding: 5px;
`;

const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #192637;
`;

const Button = styled.button`
    width: 10%;
    border: none;
    padding: 15px 20px;
    background-color: #192637;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 3px;
`;

const ExpenseForm = ({ props }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleInputChanges = (event) => {
        setName(event);
    };

    const isNumericInput = (event) => {
        const reg = new RegExp("^[+]?([0-9]{0,})*[.]?([0-9]{0,2})?$", "g");
        if (event === "" || reg.test(event)) {
            setPrice(event);
        }
    };

    const handleTextAreaChanges = (event) => {
        setDescription(event);
    };

    const saveExpenses = async (req, res) => {
        await axios
            .post("http://127.0.0.1:8000/saveExpenses/", {
                name: name,
                price: price,
                description: description,
            })
            .then((res) => {
                // toast.success("Saved Successfully");
            })
            .catch((err) => {
                setMsg("Error");
            });
    };

    return (
        <Form method="Post" action="/saveExpenses">
            <FormDiv>
                <Left>
                    <Input
                        id="name"
                        value={name}
                        placeholder="name"
                        onChange={(event) => {
                            handleInputChanges(event.target.value);
                        }}
                        required
                    />
                </Left>
                <Center>
                    <Input
                        id="price"
                        placeholder="price"
                        value={price}
                        onChange={(event) => {
                            isNumericInput(event.target.value);
                        }}
                        required
                    />
                </Center>
                <Right>
                    <TextArea
                        id="description"
                        name="description"
                        value={description}
                        placeholder="description"
                        onChange={(event) => {
                            handleTextAreaChanges(event.target.value);
                        }}
                        required
                    />
                </Right>
            </FormDiv>
            <Button onClick={saveExpenses}>Add</Button>
        </Form>
    );
};

export default ExpenseForm;
