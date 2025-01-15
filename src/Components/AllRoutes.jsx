// Importing necessary components and pages
import { Routes, Route } from "react-router-dom"; // Routes and Route from react-router-dom for defining routes
import Tata_log from "../Pages/Tata_logo"; // Homepage or Tata logo page component
// import Medicines from "../Pages/Medicines"; // Commented out the Medicines page (not currently in use)
import Lab_tests from '../Pages/Lab_tests'; // Lab tests page component
import Consult_doctors from '../Pages/Consult_doctors'; // Consult doctors page component
import Cancer_care from "../Pages/Cancer_care"; // Cancer care page component
import Partnerships from "../Pages/Partnerships"; // Partnerships page component
// import Care_plan from "../Pages/Care_plan"; // Commented out the Care plan page (not currently in use)
import Login from "../Pages/Login"; // Login page component
import Sign_up from "../Pages/Sign_up"; // Sign-up page component
import Offer from "../Pages/Offers"; // Offers page component
import Carts from "../Pages/Carts"; // Carts page component
import Need_help from '../Pages/Need_help'; // Need help page component
import PrivateRoute from "./PrivateRoute"; // Private route component for protected routes
import Single_page from "../Pages/Single_page"; // Single page for individual product view
import Diabetes from "../Pages/Diabetes"; // Diabetes category page component
import Add_Product from "../../Admin/Add_product";
import Edit_product from "../../Admin/Edit_product";

// AllRoutes component that defines the different routes of the application
function AllRoutes() {
    return (
        <Routes> {/* Wrapping all Route components within Routes */}
            {/* Defining each route with the path and the corresponding component */}
            <Route path="/" element={<Tata_log />} /> {/* Homepage route */}
            <Route path="/" element={<Tata_log />} /> {/* Duplicate route for the homepage */}
            <Route path="/lab" element={<Lab_tests />} /> {/* Lab tests route */}
            <Route path="/consult" element={<Consult_doctors />} /> {/* Consult doctors route */}
            <Route path="/cancer" element={<Cancer_care />} /> {/* Cancer care route */}
            <Route path="/partnerships" element={<Partnerships />} /> {/* Partnerships route */}
            {/* <Route path="/care" element={<Care_plan />} /> */} {/* Commented out care plan route */}
            <Route path="/login" element={<Login />} /> {/* Login route */}
            <Route path="/sign" element={<Sign_up />} /> {/* Sign-up route */}
            <Route path="/offers" element={<Offer />} /> {/* Offers route */}
            <Route path="/carts" element={
                <PrivateRoute> {/* Protected route for the carts page */}
                    <Carts />
                </PrivateRoute>} /> {/* Carts route within PrivateRoute to ensure only authenticated users can access */}
            <Route path="/need" element={<Need_help />} /> {/* Need help route */}
            <Route path='/collagen/:id' element={<Single_page />}></Route> {/* Dynamic route for single product page based on product ID */}
            <Route path='/categories/:category' element={<Diabetes />}></Route> {/* Dynamic route for categories like Diabetes based on category name */}
            <Route path='/add-product' element={<Add_Product />}></Route>
            <Route path='/edit-product/:productId' element={<Edit_product />}></Route>
        </Routes>
    );
}

export default AllRoutes; // Exporting the AllRoutes component for use in other parts of the app
