import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import UserDashboard from "../Pages/User/UserDashboard";
import AdminProfile from "../Pages/Admin/AdminProfile";
import UserProfile from "../Pages/User/UserProfile";
import AllPost from "../Pages/Posts/AllPost";
import Home from "../Pages/Public/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Contracts from "../Pages/Contracts/Contracts";
import FarmerPosts from "../Pages/FarmerPosts/FarmerPosts";
import { PostDetail } from "../Pages/FarmerPosts/PostDetail";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/allPost" element={<AllPost />} />
    <Route path="/farmerPost" element={<FarmerPosts />} />
    <Route path="/farmerPostDetails/:id" element={<PostDetail />} />
    <Route path="/contracts" element={<Contracts />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/user/dashboard" element={<UserDashboard />} />
    <Route path="/adminProfile" element={<AdminProfile />} />
    <Route path="/userProfile" element={<UserProfile />} />
  </Routes>
);
