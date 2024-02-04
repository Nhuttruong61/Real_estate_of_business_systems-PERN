"use client";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { usePathname } from "next/navigation";
import HeaderLayout from "@/components/Header/HeaderLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Footer from "@/components/footer/Footer";
import Background from "@/components/Header/Background";
function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {pathname !== "/" && pathname !== "/admin" && <HeaderLayout />}
          {pathname !== "/" && pathname !== "/admin" && (
            <Background pathname={pathname} />
          )}

          {children}
          {pathname !== "/admin" && <Footer />}
        </PersistGate>
      </Provider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default Providers;
