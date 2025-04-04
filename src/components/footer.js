import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Kontak Kami</h2>
          <p>📞 0812-3456-7890</p>
          <p>📧 email@tokomainan.com</p>
          <p>📍 Jl. Mainan No. 10, Kota Seru</p>
        </div>
        <div className="text-sm">
          <p>&copy; 2024 Toko Mainan Seru. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );

export default Footer;