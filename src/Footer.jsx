const Footer = () => {
  return (
    <footer className="bg-[#77CE15] text-white py-2">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold mb-4 md:mb-0 flex justify-center items-center">
          <div className="w-[5rem] h-[5rem]">
            <img src="/logo.png" alt="" className="w-full" />
          </div>
          <p> Inflential Event Planning and Agro-Catering Services</p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-white">
          © {new Date().getFullYear()} Influential Catering Services. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
