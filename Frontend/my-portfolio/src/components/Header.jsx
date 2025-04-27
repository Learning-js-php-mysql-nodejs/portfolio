import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6 sticky top-0 z-50 w-full" >
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <Button variant="outline">Profile</Button>
      </div>
    </header>
  );
}
