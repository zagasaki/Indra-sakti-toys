import React from "react";
import { Carousel } from "react-responsive-carousel";
import Card from "./card";
import "./Body.css";

const Body = () => (
    <main className="container mx-auto px-4 py-8">
      <Carousel showThumbs={false} autoPlay infiniteLoop className="w-full max-w-2xl mb-6">
        <div>
          <img src="/images/toy1.jpg" alt="Mainan 1" />
        </div>
        <div>
          <img src="/images/toy2.jpg" alt="Mainan 2" />
        </div>
        <div>
          <img src="/images/toy3.jpg" alt="Mainan 3" />
        </div>
      </Carousel>
  
      <Card>
        <h2 className="text-2xl font-semibold mb-4">Tentang Kami</h2>
        <p className="text-gray-700">
          Toko Mainan Seru menyediakan berbagai macam mainan edukatif dan hiburan untuk anak-anak.
          Kami hadir untuk memberikan keceriaan dengan produk berkualitas.
        </p>
      </Card>
    </main>
  );

export default Body;