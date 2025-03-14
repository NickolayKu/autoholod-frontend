import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function BaseLayout() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("main", { className: "min-h-svh pt-18", children: _jsx(Outlet, {}) }), _jsx(Footer, {}), _jsx(ScrollRestoration, {})] }));
}
