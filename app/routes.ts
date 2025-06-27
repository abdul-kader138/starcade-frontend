// routes/index.ts

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // 🔹 Auth Routes (without Header/Footer)
  route("", "routes/layouts/AuthLayout.tsx", [
    route("login", "routes/users/Login.tsx"),
    route("registration", "routes/users/Registration.tsx"),
    route("forgot-password", "routes/users/ForgotPassword.tsx"),
    route("reset-password/:token", "routes/users/ResetPassword.tsx"),
  ]),

  // 🔹 Main Routes (with Header/Footer)
  route("", "routes/layouts/MainLayout.tsx", [
    index("routes/Home.tsx"),
    route("product", "routes/Product.tsx"),
    route("profile", "routes/users/EditProfile.tsx"),
    route("dashboard", "routes/Dashboard.tsx"),
  ]),

  // 🔹 Fallback (404 page)
  route("*", "routes/NotFound.tsx"),
] satisfies RouteConfig;
