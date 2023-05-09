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


export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Treatement />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pressarticles" element={<Press />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Form />} />
      <Route path="/booktreatement/:id" element={<BookTreatement />} />
      <Route path="/checkout" element={<Checkout />} />
      

    </Routes>
  );
}
