// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { Analytics } from "@vercel/analytics/react"
// import Index from "./pages/Index.tsx";
// import NotFound from "./pages/NotFound.tsx";
// import Auth from "./pages/Auth.tsx";
// import Admin from "./pages/Admin.tsx";
// import Student from "./pages/Student.tsx";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <Analytics/>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/auth" element={<Auth />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/student" element={<Student />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;



import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const SiteDown = () => (
  <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
    <div>
      <h1 className="text-4xl font-bold">Site Temporarily Down.......</h1>
      <p className="mt-4 text-muted-foreground">
       SITE IS NOT RESPONDING! TRY LATER!
      </p>
    </div>
  </main>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Analytics />
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<SiteDown />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;