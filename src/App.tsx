import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AIChatbot } from "@/components/shared/AIChatbot";
import Dashboard from "./pages/Dashboard";
import Budget from "./pages/Budget";
import Savings from "./pages/Savings";
import Investments from "./pages/Investments";
import Debt from "./pages/Debt";
import Tax from "./pages/Tax";
import Education from "./pages/Education";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <main className="flex-1 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/budget" element={<Budget />} />
                <Route path="/savings" element={<Savings />} />
                <Route path="/investments" element={<Investments />} />
                <Route path="/debt" element={<Debt />} />
                <Route path="/tax" element={<Tax />} />
                <Route path="/education" element={<Education />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <AIChatbot />
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
