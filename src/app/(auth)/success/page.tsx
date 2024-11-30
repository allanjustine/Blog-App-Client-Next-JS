"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useAuth } from "@/app/context/AuthContext";
import LoadingLoaders from "@/app/components/loaders/LoadingLoaders";
import UnauthorizedPage from "@/app/utils/UnauthorizedPage";

export default function Page() {
  const router = useRouter();
  const { user, loading, logout, isAuthenticated, isLogout }: any = useAuth();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      return router.push("/login");
    }

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const rememberToken = urlParams.get("rememberToken");
    if (token && rememberToken) {
      Cookies.set("APP-TOKEN", token);
      Cookies.set("APP-REMEMBER-TOKEN", rememberToken);
    }
  }, [router]);

  if (loading) return <LoadingLoaders />;

  if (!isAuthenticated && !isLogout) return <UnauthorizedPage />;

  return (
    <div
      className="flex items-center justify-center min-h-screen absolute top-0 left-0 right-0 bottom-0 dark:bg-gray-800 bg-gray-100 z-50 p-4"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/12/4d/e3/124de3d1b5e12f1d8fcec1685e634361.gif')",
      }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
        <p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7626/7626666.png"
            className="w-28 mb-2 mx-auto"
            alt=""
          />
        </p>
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Authentication Successful
        </h1>
        <p className="text-lg mb-6">
          You have been successfully authenticated! Welcome back!
        </p>

        <div className="mb-4">
          <p className="text-xl font-bold">{user?.name}</p>
        </div>

        <div className="mb-4">
          <p className="text-sm">{user?.email}</p>
        </div>

        <div className="flex space-x-2 justify-center">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="mt-6 px-4 py-2 bg-blue-600 text-sm hover:scale-105 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <i className="far fa-arrow-up"></i> Go to Dashboard
          </button>
          <button
            type="button"
            onClick={() => logout()}
            className="mt-6 px-4 py-2 bg-gray-600 text-sm hover:scale-105 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <i className="far fa-arrow-left-from-bracket"></i> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
