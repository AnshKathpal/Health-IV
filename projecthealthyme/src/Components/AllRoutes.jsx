import { Routes, Route } from "react-router-dom";
import { AboutUs } from "../pages/AboutUs";
import { Blogs } from "../pages/Blogs";
import { Contact } from "../pages/Contact";
import { Treatement } from "../pages/Treatement";
import { Cart } from "../pages/Cart";
import { Press } from "../pages/PressArticals";
import { NotFound } from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import { Form } from "../pages/Form";
import { BookTreatement } from "../pages/BookTreatement";
import { Checkout } from "../pages/Checkout";
import { Appointments } from "../pages/Appointments";
import { PrivateRoute } from "./PrivateRoute";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Treatement />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pressarticles" element={<Press />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/form"
        element={
          <PrivateRoute>
            <Form />
          </PrivateRoute>
        }
      />
      <Route
        path="/booktreatement/:id"
        element={
          <PrivateRoute>
            <BookTreatement />
          </PrivateRoute>
        }
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        path="/appointments"
        element={

            <Appointments />

        }
      />
    </Routes>
  );
}
