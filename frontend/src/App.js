import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ContactManager from "./components/ContactManager";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Management</h1>
        <ContactManager />
      </div>
    </QueryClientProvider>
  );
}

export default App;
