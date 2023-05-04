import { Routes,Route } from "react-router-dom";
import { AboutUs } from "../pages/AboutUs";
import { Blogs } from "../pages/Blogs";
import { Contact } from "../pages/Contact";
import { Treatement } from "../pages/Treatement";
import { Cart } from "../pages/Cart";
import { Press } from "../pages/PressArticals";
import { NotFound } from "../pages/NotFound";

export function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Treatement/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/pressarticles" element={<Press/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}