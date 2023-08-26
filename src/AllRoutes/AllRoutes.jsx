import { Routes,Route } from "react-router-dom";
import Register from "../Pages/Register";
import SelectCatagory from "../Pages/SelectCatagory";
import Weather from "../Pages/Weather";

function AllRoutes(){
    return(
      
            <Routes>
              <Route path='/' element={<Register />}> </Route>
              <Route path='/home' element={<SelectCatagory />}></Route>
             <Route path='/weather' element={<Weather />}></Route>
            </Routes>
       
    )
}
export default AllRoutes