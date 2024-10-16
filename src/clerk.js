import { ClerkProvider } from "@clerk/clerk-react";

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

const ClerkProviderWithConfig = ({ children }) => (
  <ClerkProvider frontendApi={frontendApi}>{children}</ClerkProvider>
);

export default ClerkProviderWithConfig;
