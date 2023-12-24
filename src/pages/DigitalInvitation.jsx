import React from 'react';
import gunung from '../assets/image/gunung.png';
import barcode from '../assets/image/barcode.png';
export default function DigitalInvitation() {
  return (
    <div className="md:flex justify-center items-center">
      <div className="bg-third text-primary font-RS h-screen max-h-screen w-full max-w-lg flex flex-col justify-start items-start px-8 py-6 overflow-x-hidden">
        <div className="text-base sm:text-lg">
          <span className="text-secondary">New Era - </span>
          <span>New Logic</span>
          <span className="text-secondary"> - Anjaayy</span>
        </div>
        <div className="text-4xl text-stroke mt-8 md:text-5xl">
          <p>Tahun Baru,</p>
          <p>Era Baru!</p>
        </div>
        <div className="min-w-[254px] mt-[10px] max-w-[324px]">
          <div className="min-h-[186px] max-h-[237px] bg-secondary flex flex-col justify-center items-center relative rounded-2xl">
            <div className="w-[105px] h-[105px] rounded-full bg-primary"></div>
            <img src={gunung} alt="" className="w-full absolute bottom-0" />
          </div>
          <div className="bg-fourth rounded-b-2xl flex flex-row justify-center items-center gap-2 px-4 py-2">
            <p>Scan dan temukan pesan spesial untukmu</p>
            <img src={barcode} alt="" className="w-[60px] h-[60px]" />
          </div>
        </div>
        <ul className="list-disc list-inside mt-[26px]">
          <li>Membakar rasa sakit dan memeluk kebahagiaan.</li>
          <li>Menanti harapan di tahun depan.</li>
          <li>Menjelajahi sudut pandang yang merangsang pemikiran.</li>
        </ul>
        <div className="w-full">
          <hr className="h-0.5 mx-auto my-4 bg-secondary border-0 rounded" />
          <div className="flex flex-row justify-center items-center">
            <div>
              <p>Minggu, Desember 31</p>
              <hr className="h-0.5 mx-auto my-4 bg-secondary border-0 rounded" />
              <div className="flex flex-row justify-center items-center">
                <a href="#">Farhan House</a>
                <hr className="h-0.5 mx-auto my-4 bg-secondary border-0 rounded" />
                <p>Jl. Jati Kencana Raya, RT.004/RW.008, Mustikasari</p>
              </div>
            </div>
          </div>
          <hr className="h-0.5 mx-auto my-4 bg-secondary border-0 rounded" />
        </div>
      </div>
    </div>
  );
}
