"use client";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { usePathname } from "next/navigation";
import HeaderLayout from "@/components/Header/HeaderLayout";
function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {pathname !== "/" && <HeaderLayout />}
        {children}
      </PersistGate>
    </Provider>
  );
}

export default Providers;
