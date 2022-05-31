import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
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

class EditExpenses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null,
        };
    }
    render() {
        return (
            <div
                className="modal fade"
                id={"editExpenseModal" + this.props.rowId}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Expense
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <ExpenseForm
                                type="column"
                                expenseData={this.expenseData}
                            />
                            {/* <Form method="Post" action="/saveExpenses">
                                <Left>
                                    <Input
                                        id="name"
                                        value={name}
                                        placeholder="name"
                                        onChange={(event) => {
                                            handleInputChanges(
                                                event.target.value
                                            );
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
                                            handleTextAreaChanges(
                                                event.target.value
                                            );
                                        }}
                                        required
                                    />
                                </Right>
                                <Button onClick={updateExpenses}>Update</Button>
                            </Form> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditExpenses;
