import Dashboard from "./pages/dashboard";
import UserList from "./pages/user";
import Profile from "./pages/user/Profile";

const routes:any = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "fas fa-dashboard",
      component: <Dashboard />,
      layout: "/admin"
    },
    {
      path: "/user",
      name: "User",
      icon: "fas fa-user",
      component: <UserList />,
      layout: "/user",
    },
    {
      path: "/profile",
      name: "Profile",
      icon: "",
      component: <Profile />,
      layout: "/profile",
      hidden:true
    },
  ];
  export default routes;