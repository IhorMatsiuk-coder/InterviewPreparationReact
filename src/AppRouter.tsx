import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import {Layout} from "./components";
import {NoMatch} from "./pages/NoMatch";
import QueueRenderLog from "./pages/QueueRenderLog/QueueRenderLog";
import {FetchAndSearchDebounceExample} from "./pages/FetchAndSearchDebounceExample";
import {GetShowUserList} from "./pages/GetShowUserList";
import SearchFunction from "./pages/SearchFunction/SearchFunction";
import {SearchDebounceFunction} from "./pages/SearchDebounceFunction";
import SortNameFunction from "./pages/SortNameFunction/SortNameFunction";
import ControlledComponentForm from "./pages/ControlledComponentForm/ControlledComponentForm";
import {ThemesSwitcher} from "./pages/ThemesSwitcher";
import {TodoList} from "./pages/TodoList";
import {ShopBasketComponent} from "./pages/ShopBasketComponent";
import {PaginationComponent} from "./pages/PaginationComponent";
import {InfiniteImageLoading} from "./pages/InfiniteImageLoading";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path="queueRenderLog"
                        element={<QueueRenderLog />
                    }
                />
                <Route
                    path="fetchAndSearchDebounceExample"
                        element={<FetchAndSearchDebounceExample />
                    }
                />
                <Route
                    path="getShowUserList"
                        element={<GetShowUserList />
                    }
                />
                <Route
                    path="searchFunction"
                        element={<SearchFunction />
                    }
                />
                <Route
                    path="searchDebounceFunction"
                        element={<SearchDebounceFunction />
                    }
                />
                <Route
                    path="sortNameFunction"
                        element={<SortNameFunction />
                        }
                />
                <Route
                    path="controlledComponentForm"
                        element={<ControlledComponentForm />
                    }
                />
                <Route
                    path="themesSwitcher"
                    element={
                        <ThemesSwitcher />
                    }
                />
                <Route
                    path="todoList"
                    element={
                        <TodoList />
                    }
                />
                <Route
                    path="shopBasketComponent"
                        element={<ShopBasketComponent />
                    }
                />
                <Route
                    path="paginationComponent"
                        element={<PaginationComponent />
                    }
                />
                <Route
                    path="infiniteImageLoading"
                        element={<InfiniteImageLoading />
                    }
                />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    )
}

export default AppRouter
