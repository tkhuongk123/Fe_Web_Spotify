// Page
import Home from "../pages/Home";
import Login from "../pages/Login";

// Layout
import { LoginLayout } from "../components/Layouts";

// Public routes
const publicRoutes = [
    { path: '/', component: Home, },
    { path: '/auth/login', component: Login, layout: LoginLayout},
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };