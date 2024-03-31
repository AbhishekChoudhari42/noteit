import Image from "next/image";
import NotePad from "./components/NotePad";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <NotePad/>
    </main>
  );
}
