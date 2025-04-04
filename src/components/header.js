import React from "react";
import "./Header.css";

const Header = () => (
    <header className="w-full bg-blue-500 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Indra Sakti Toys</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-blue-200">Beranda</a></li>
            <li><a href="/produk" className="hover:text-blue-200">Produk</a></li>
            <li><a href="/tentang" className="hover:text-blue-200">Tentang</a></li>
            <li><a href="/kontak" className="hover:text-blue-200">Kontak</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );

export default Header;