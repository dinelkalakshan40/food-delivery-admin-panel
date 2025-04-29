import {Route, Router, Routes} from "react-router-dom";
import AddFood from "./component/AddFood.jsx";
import ListFood from "./component/ListFood.jsx";
import Orders from "./component/Orders.jsx";
import Sidebar from "./component/Sidebar.jsx";
import Menubar from "./component/Menubar.jsx";
import {useState} from "react";

const App = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);


    const toggleSideBar=()=>{
        setSidebarVisible(!sidebarVisible);
    }

    return (
        <div className="d-flex" id="wrapper">

            <Sidebar sidebarVisible={sidebarVisible}/>

            <div id="page-content-wrapper">
                <Menubar toggleSideBar={toggleSideBar}/>

                <div className="container-fluid">
                    <Routes>
                        <Route path='/Add' element={<AddFood/>}/>
                        <Route path='/list' element={<ListFood/>}/>
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/' element={<ListFood/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
