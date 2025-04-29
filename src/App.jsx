import {Route, Router, Routes} from "react-router-dom";
import AddFood from "./component/AddFood.jsx";
import ListFood from "./component/ListFood.jsx";
import Orders from "./component/Orders.jsx";
import Sidebar from "./component/Sidebar.jsx";
import Menubar from "./component/Menubar.jsx";

const App=()=> {

  return (
      <div className="d-flex" id="wrapper">

          <Sidebar/>

          <div id="page-content-wrapper">
              <Menubar/>

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
