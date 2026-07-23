"use client"
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import  { ReactNode } from "react";


export function Providers({ children }: { children: ReactNode }) {
  return (<body className="min-h-full flex  flex-col">
    <Provider store={store}>
      {children}
    </Provider>
  </body>

  );

}
