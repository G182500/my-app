const Footer = () => {
  //bg-[#2e2e2e]
  return (
    <footer className="flex flex-col bg-[#1d1d1d] justify-center p-6 mt-2 w-full sm:mt-3">
      <p className="italic opacity-65 text-xs text-center">
        Developed with Next.js, using Typescript, Tailwind CSS and Neon
        (PostgreSQL).
      </p>
    </footer>
  );
};

export default Footer;
