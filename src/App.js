import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import { testAction } from "./actions/actions";
import Routes from "./routes/route";

function App({ testAction, test1 }) {
    console.log(process.env.REACT_APP_TEST);
    testAction();
    console.log(test1);
    return (
        <div>
            <Routes />
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
