import { NavLink, Outlet } from "react-router-dom";

const Dashbroad = () => {
  return (
    <div>
      <nav>{/* <Header></Header> */}</nav>
      <main className="w-11/12 mx-auto">
        <div className="grid py-5 gap-5 grid-cols-12  min-h-screen">
          {/* menu */}
          <div className="w-full col-span-3 flex flex-col items-center gap-5">
            <NavLink to="/" className="p-2 my-5 border border-black w-full">
              Home
            </NavLink>
            <NavLink to="/dashbroad/add-product" className="p-2 my-5 border border-black w-full">
              Add Product
            </NavLink>
            <NavLink to="/dashbroad/manage-product" className="p-2 my-5 border border-black w-full">
              Manage Product
            </NavLink>
            <NavLink to="/dashbroad/add-category" className="p-2 my-5 border border-black w-full">
              Add Category
            </NavLink>
            <NavLink to="/dashbroad/manage-category" className="p-2 my-5 border border-black w-full">
              Manage Category
            </NavLink>
          </div>
          {/* main */}
          <div className="w-full col-span-9">
            <Outlet></Outlet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashbroad;


