import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./presentation/pages/main";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;