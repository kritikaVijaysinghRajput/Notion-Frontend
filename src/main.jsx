import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.jsx";
import "./index.css";

const clerkFrontendApi = import.meta.env.VITE_CLERK_FRONTEND_API;
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      publishableKey={publishableKey}
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);
