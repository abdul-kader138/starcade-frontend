import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("product", "routes/Product.tsx"),
  route("login", "routes/users/Login.tsx"),
  route("registration", "routes/users/Registration.tsx"),
  route("profile", "routes/users/Profile.tsx"),
  route("add-card", "routes/users/AddCard.tsx"),
  route("forgot-password", "routes/users/ForgotPassword.tsx"),
  route("edit-profile", "routes/users/EditProfile.tsx"),
  route("dashboard", "routes/Dashboard.tsx"),
  route("article/:articleId", "routes/articles/Article.tsx"),
  route("reset-password/:token", "routes/users/ResetPassword.tsx"),
  route("admin/add-article", "routes/articles/AddArticle.tsx"),
] satisfies RouteConfig;
