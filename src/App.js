import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import { testAction } from "./actions/actions";
import Routes from "./routes/route";
import Header from "./containers/layout/header";
import Footer from "./containers/layout/footer";

function App({ testAction, test1 }) {
    console.log(process.env.REACT_APP_TEST);
    testAction();
    console.log(test1);
    return (
        <React.Fragment>
            <Header />
            <Routes />
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = ({ test: { test1 } }) => ({
    test1
});

const mapDispatchToProps = {
    testAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
