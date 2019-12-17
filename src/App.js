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
        <div className="gpu-mark-app">
            <Header />
            <div className="body-wrap">
                {/* <div className="breadcrumb-wrap">Home</div> */}
                <div className="content-wrap">
                    <Routes />
                </div>
            </div>
            <Footer />
        </div>
    );
}

const mapStateToProps = ({ test: { test1 } }) => ({
    test1
});

const mapDispatchToProps = {
    testAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
