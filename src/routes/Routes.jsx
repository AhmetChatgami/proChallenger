import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import Profile from '../pages/Dashboard/Common/Profile'
import Statistics from '../pages/Dashboard/Common/Statistics'
import MainLayout from '../layouts/MainLayout'
import MyInventory from '../pages/Dashboard/Seller/MyInventory'
import { createBrowserRouter } from 'react-router'
import ContestDetails from '../pages/ContestDetails/ContestDetails'
import AddContest from '../pages/Dashboard/Seller/AddContest'
import PaymentSuccess from '../pages/Payment/PaymentSuccess'
import MyContests from '../pages/Dashboard/Customer/MyContests'
import ManageContests from '../pages/Dashboard/Seller/ManageContests'
import AllContests from '../pages/AllContests/AllContests'
import UserRequests from '../pages/Dashboard/Admin/UserRequests'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contest/:id',
        element: <ContestDetails />,
      },
      {
        path: 'payment-success',
        element: <PaymentSuccess />,
      },
      {
        path: 'all-contests',
        element: (
          <PrivateRoute>
            <AllContests />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-contest',
        element: (
          <PrivateRoute>
            <AddContest />
          </PrivateRoute>
        ),
      },
     
      {
        path: 'my-inventory',
        element: (
          <PrivateRoute>
            <MyInventory />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: 'users-requests',
        element: (
          <PrivateRoute>
            <UserRequests />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-contests',
        element: (
          <PrivateRoute>
            <MyContests />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-contests',
        element: <ManageContests />,
      },
       
    ],
  },
])
