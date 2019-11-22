import React from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.scss";
import { testAction } from "./actions/actions";

function App({ testAction, test1 }) {
    console.log(process.env.REACT_APP_TEST);
    testAction();
    console.log(test1);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

// export default App;

const mapStateToProps = ({ test: { test1 } }) => ({
    test1
});

const mapDispatchToProps = {
    testAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
