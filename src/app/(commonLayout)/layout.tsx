import Footer from "@/components/shared/Footer";
import Menubar from "@/components/shared/Menubar";

import { Toaster } from "sonner";

const CommonLayout = async({ children }: { children: React.ReactNode }) => {

  return (
    <div className="container mx-auto">
      <Menubar/>
      <div className="min-h-screen mt-20 ">{children}<Toaster /></div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
