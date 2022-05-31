import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import ExpenseTable from "./ExpenseTable";
import Home from "./Home";
import { Redirect } from "react-router-dom";

const Logo = styled.h4`
    flex: 1;
    margin: 0;
    padding: 10px;
    letter-spacing: 2px;
    color: white;
`;

const Nav = styled.nav`
    background-color: #192637;
    color: white;
`;

const NavbarDiv = styled.div`
    color: white;
`;

const Navbar = () => {
    return (
        <div>
            <Nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="#">
                        <Logo>drughelp.care!</Logo>
                        {/* <MedicalServices /> */}
                        {/* <Img src="https://drughelp.care/static/media/drughelp.329e7b79.png" /> */}
                        {/* <Img
                            src={process.env.PUBLIC_URL + "/logo.png"}
                            alt="logo"
                        /> */}
                    </Link>
                    <NavbarDiv
                        className="collapse navbar-collapse"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active text-white"
                                    aria-current="page"
                                    to="/"
                                >
                                    Add Expense
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white"
                                    to="/fetchExpenses"
                                >
                                    Fetch Expenses
                                </Link>
                            </li>
                        </ul>
                    </NavbarDiv>
                </div>
            </Nav>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/fetchExpenses" component={ExpenseTable} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    );
};

export default Navbar;
