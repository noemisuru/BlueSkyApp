import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PersonalScores from "./containers/scores/PersonalScores";
import LoginContainer from "./containers/login/LoginContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Goals from "./containers/goals/Goals";
import LeaderGrid from "./LeaderBoard/LeaderGrid";
import LearnMore from "./containers/learnmore/LearnMore";
import Page404 from "./containers/Page404";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/myscores" component={PersonalScores}/>
            <Route path="/mygoals" component={Goals}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/leaderboard" component={LeaderGrid}/>
            <Route path="/learnmore" component={LearnMore}/>
            <Route component={Page404}/>
        </Switch>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
