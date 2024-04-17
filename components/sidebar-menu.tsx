function getSalutation() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Bom dia";
  else if (hour >= 12 && hour < 18) return "Boa tarde";
  else return "Boa noite";
}

export default function SideBarMenu() {
  return (
    <div className="hidden lg:block bg-white fixed h-full p-4 rounded-xl w-[160px]">
      <p className="text-black">{getSalutation()}</p>
    </div>
  );
}
