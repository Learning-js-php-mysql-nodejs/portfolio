import { Button } from "@/components/ui/button";
import { UserContext } from "@/context";
import { useContext } from "react";

const Header = () => {
  const { toggleDarkMode, activeTab, setActiveTab, isDarkMode } = useContext(UserContext);
  const tabs = ['Home', 'Projects', 'Contact Us'];
  return (
    <header className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6 sticky top-0 z-50 w-full transition-colors ">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'default' : 'outline'}
            onClick={() => setActiveTab(tab)}
            className="text-sm font-medium"
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
        <Button variant="outline">Login</Button>
      </div>
    </header>
  );
}


export default Header;