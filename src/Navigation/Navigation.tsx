import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AdminProfile from "../Pages/Admin/AdminProfile";
import UserProfile from "../Pages/User/UserProfile";
import AllPost from "../Pages/Posts/AllPost";
import Home from "../Pages/Public/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Contracts from "../Pages/Contracts/Contracts";
import FarmerPosts from "../Pages/Posts/FarmerPosts";
import { PostDetail } from "../Pages/Posts/PostDetail";

import CompanyOffers from "../Pages/Farmer/CompanyOffers/CompanyOffers";
import Dashboard from "../Pages/Farmer/Dashboard/Dashboard";
import HarvestRecords from "../Pages/Farmer/HarvestRecords/HarvestRecords";
import MyContracts from "../Pages/Farmer/MyContracts/MyContracts";
import Notifications from "../Pages/Farmer/Notifications/Notifications";
import Payment from "../Pages/Farmer/Payment/Payment";
import Profile from "../Pages/Farmer/Profile/Profile";

import BuyerDashboard from "../Pages/Buyer/Dashboard/Dashboard";
import ContractRequest from "../Pages/Buyer/ContractRequests/ContractRequest";
import Farmers from "../Pages/Buyer/Farmers/Farmers";
import AdminNotifications from "../Pages/Buyer/Notifications/Notifications";
import BuyerPayment from "../Pages/Buyer/Payment/Payment";
import BuyerProfile from "../Pages/Buyer/Profile/Profile";
import Reports from "../Pages/Buyer/Reports/Reports";
import RicePurchases from "../Pages/Buyer/RicePurchases/RicePurchases";

export const AppRoutes = () => (
  <Routes>
    {/* test route */}
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/allPost" element={<AllPost />} />
    <Route path="/farmerPost" element={<FarmerPosts />} />
    <Route path="/farmerPostDetails/:id" element={<PostDetail />} />
    <Route path="/contracts" element={<Contracts />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/adminProfile" element={<AdminProfile />} />
    <Route path="/userProfile" element={<UserProfile />} />

    {/* farmer route */}
    <Route path="/farmer/offers" element={<CompanyOffers />} />
    <Route path="/farmer/dashboard" element={<Dashboard />} />
    <Route path="/farmer/harvestRecords" element={<HarvestRecords />} />
    <Route path="/farmer/myContracts" element={<MyContracts />} />
    <Route path="/farmer/notifications" element={<Notifications />} />
    <Route path="/farmer/payment" element={<Payment />} />
    <Route path="/farmer/profile" element={<Profile />} />

    {/* buyer route */}
    <Route path="/buyer/contracts" element={<ContractRequest />} />
    <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
    <Route path="/buyer/farmers" element={<Farmers />} />
    <Route path="/buyer/notifications" element={<AdminNotifications />} />
    <Route path="/buyer/payment" element={<BuyerPayment />} />
    <Route path="/buyer/profile" element={<BuyerProfile />} />
    <Route path="/buyer/reports" element={<Reports />} />
    <Route path="/buyer/purchases" element={<RicePurchases />} />
  </Routes>
);
