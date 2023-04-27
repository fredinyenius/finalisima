import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";
import { AuthProvider } from "../context/AuthContext";

const PrimaryLayout = () => {
  return (
    <AuthProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      </AuthProvider>
  );
};

export default PrimaryLayout;