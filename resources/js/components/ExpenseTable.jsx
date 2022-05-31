import React, { useState, useEffect, Component } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import EditExpenses from "./EditExpenses";
import DeleteExpense from "./DeleteExpense";
import { EditOutlined, DeleteOutlineOutlined } from "@material-ui/icons";

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

const THead = styled.thead`
    background: #192739;
    color: white;
`;

const SocialIcon = styled.a`
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

class ExpenseTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            price: null,
            description: null,
        };
    }

    render() {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetchAllExpenses();
        }, []);

        const fetchAllExpenses = async () => {
            await axios
                .get("http://127.0.0.1:8000/getExpenses")
                .then((response) => {
                    setData(response.data);
                });
        };

        const getExpense = async (id) => {
            await axios
                .post("http://127.0.0.1:8000/editExpense", {
                    id: id,
                })
                .then((response) => {
                    if (response != null && response.data != null) {
                        this.setState({
                            name: response.data.name,
                            price: response.data.price,
                            description: response.data.description,
                        });
                    }
                });
        };

        return (
            <Container>
                <Wrapper>
                    <table className="table tablehover">
                        <THead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope="col"></th>
                            </tr>
                        </THead>
                        <tbody>
                            {data &&
                                data.map &&
                                data.map((row) => {
                                    return (
                                        <tr key={row.id}>
                                            <td>
                                                <SocialIcon
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#editExpenseModal"
                                                    rowId={row.id}
                                                    onClick={() => {
                                                        getExpense(row.id);
                                                    }}
                                                >
                                                    <EditOutlined />
                                                </SocialIcon>
                                                <EditExpenses
                                                    rowId="{row.id}"
                                                    expenseData={this.state}
                                                />
                                            </td>
                                            <th scope="row">{row.id}</th>
                                            <td>{row.name}</td>
                                            <td>{row.price}</td>
                                            <td>{row.description}</td>
                                            <td>
                                                <SocialIcon
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#deleteExpenseModal"
                                                >
                                                    <DeleteOutlineOutlined />
                                                </SocialIcon>
                                                <DeleteExpense
                                                    fetch={fetchAllExpenses()}
                                                    rowId={row.id}
                                                />
                                            </td>
                                            {/* <Switch>
                                            <Route
                                                exact
                                                path="/editExpense/${row.id}"
                                                component={EditExpenses}
                                            />
                                            <Route
                                                exact
                                                path="/deleteExpense/${row.id}"
                                                component={DeleteExpense}
                                            />
                                        </Switch> */}
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </Wrapper>
            </Container>
        );
    }
}

export default ExpenseTable;
