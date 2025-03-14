import { jsx as _jsx } from "react/jsx-runtime";
// Base layout
import BaseLayout from "@/layout/Base";
// Pages
import Home from "@/pages/Home";
// import About from "@/pages/about";
// import Products from "@/pages/products";
// import ProductDetail from "@/pages/productDetail";
// import ServiceDetail from "@/pages/serviceDetail";
// import PaymentAndDelivery from "@/pages/paymentAndDelivery";
// import PrivacyPolicy from "@/pages/privacyPolicy";
// import Certificates from "@/pages/certificates";
// import CertificatesAndLicenses from "@/pages/certificatesAndLicenses";
// import Contacts from "@/pages/contacts";
// import Errors from "@/pages/errors";
const Routes = [
    {
        path: "/",
        element: _jsx(BaseLayout, {}),
        // errorElement: <Errors />,
        children: [
            {
                path: "/",
                element: _jsx(Home, {}),
            },
            // {
            //   path: "/about",
            //   element: <About />,
            // },
            // {
            //   path: "/catalog",
            //   element: <Products />,
            // },
            // {
            //   path: "/catalog/:productId",
            //   element: <ProductDetail />,
            // },
            // {
            //   path: "/services/:serviceId",
            //   element: <ServiceDetail />,
            // },
            // {
            //   path: "/payment_and_delivery",
            //   element: <PaymentAndDelivery />,
            // },
            // {
            //   path: "/privacy_policy",
            //   element: <PrivacyPolicy />,
            // },
            // {
            //   path: "/certificates",
            //   element: <Certificates />,
            // },
            // {
            //   path: "/certificates_and_licenses",
            //   element: <CertificatesAndLicenses />,
            // },
            // {
            //   path: "/contacts",
            //   element: <Contacts />,
            // },
        ],
    },
];
export default Routes;
