import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import "./index.css";
import FormProvider from "./components/Form/FormProvider";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import AppointmentProvider from "./components/Appointment/AppointmentProvider";
import NewAppointment from "./routes/NewAppointment";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppointmentProvider>
        <App />
      </AppointmentProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "new/appointment",
        element: <NewAppointment />,
      },
    ],
  },

  {
    path: "/login",
    element: (
      <FormProvider>
        <Login />
      </FormProvider>
    ),
  },
  {
    path: "/signup",
    element: (
      <FormProvider>
        <SignUp />
      </FormProvider>
    ),
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
