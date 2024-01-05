import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Receipes from "../Pages/Receipes";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashbroad from "../Layout/Dashbroad";
import Title from "../Components/Title";
import AddProduct from "../Pages/Dashbroad/AddProduct";
import ManageProduct from "../Pages/Dashbroad/ManageProduct";
import ManageCategory from "../Pages/Dashbroad/ManageCategory";
import AddCategory from "../Pages/Dashbroad/AddCategory";


const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/recipies",
        element: <Receipes></Receipes>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/dashbroad",
    element: <Dashbroad></Dashbroad>,
    children:[
      {
        path: "/dashbroad",
        element: <Title>Dashbroad</Title>
      },
      {
        path: "/dashbroad/add-product",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/dashbroad/manage-product",
        element: <ManageProduct></ManageProduct>
      },
      {
        path: "/dashbroad/add-category",
        element: <AddCategory></AddCategory>
      },{
        path: "/dashbroad/manage-category",
        element: <ManageCategory></ManageCategory>
      },
    ]
  }
])

export default Route;

