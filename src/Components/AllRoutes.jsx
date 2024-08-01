import { Routes, Route } from "react-router-dom";
import Tata_log from "../Pages/Tata_logo";
import Medicines from "../Pages/Medicines";
import Lab_tests from '../Pages/Lab_tests';
import Consult_doctors from '../Pages/Consult_doctors';
import Cancer_care from "../Pages/Cancer_care";
import Partnerships from "../Pages/Partnerships";
// import Care_plan from "../Pages/Care_plan";
import Login from "../Pages/Login";
import Sign_up from "../Pages/Sign_up";
import Offer from "../Pages/Offers";
import Carts from "../Pages/Carts";
import Need_help from '../Pages/Need_help';
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Tata_log />} />
            <Route path="/" element={<Tata_log />} />
            <Route path="/lab" element={<Lab_tests />} />
            <Route path="/consult" element={<Consult_doctors />} />
            <Route path="/cancer" element={<Cancer_care />} />
            <Route path="/partnerships" element={<Partnerships />} />
            {/* <Route path="/care" element={<Care_plan />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Sign_up />} />
            <Route path="/offers" element={<Offer />} />
            <Route path="/carts" element={
                <PrivateRoute>
                    <Carts />
                </PrivateRoute>} />
            <Route path="/need" element={<Need_help />} />
        </Routes>
    );
}

export default AllRoutes;
