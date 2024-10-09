import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul style={{display: 'flex', gap: '20px', listStyle: "none", flexWrap: 'wrap'}}>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/">Home</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/queueRenderLog">QueueRenderLog</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/fetchAndSearchDebounceExample">FetchAndSearchDebounceExample</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/getShowUserList">GetShowUserList</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/searchFunction">SearchFunction</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/searchDebounceFunction">SearchDebounceFunction</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/sortNameFunction">SortNameFunction</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/controlledComponentForm">ControlledComponentForm</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/themesSwitcher">ThemesSwitcher</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/todoList">TodoList</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/shopBasketComponent">ShopBasketComponent</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/paginationComponent">PaginationComponent</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/infiniteImageLoading">InfiniteImageLoading</Link>
                    </li>
                </ul>
            </nav>

            <hr />
            <div id="main">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;
