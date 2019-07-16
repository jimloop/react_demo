import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    return <h2>Home</h2>;
}

function news() {
    return <h2>news</h2>;
}

function products({ match }) {
    return (
        <div>
            <h2>Products</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:prodId`} component={product} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a product.</h3>}
            />
        </div>
    );
}

function product({match}) {
    return (
        <div>
            <h2>{match.params.prodId}</h2>
        </div>
    );
}

function App1() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/news">新闻</Link>
                        </li>
                        <li>
                            <Link to="/products">商品</Link>
                        </li>
                    </ul>
                    <hr/>
                </nav>

                <Route path="/" exact component={Index} />
                <Route path="/news" component={news} />
                <Route path="/products" component={products} />
            </div>
        </Router>
    );
}

export default App1;