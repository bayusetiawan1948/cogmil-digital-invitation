import React from 'react';
import gunung from '../assets/image/gunung.webp';
import barcode from '../assets/image/barcode.png';
import transition from '../transition';

function DigitalInvitation() {
  return (
    <div className="md:flex justify-center items-center">
      <div className="bg-third text-primary font-RS h-screen max-h-screen w-full max-w-lg flex flex-col justify-start items-start px-8 py-6 overflow-x-hidden">
        <div className="text-base sm:text-lg">
          <span className="text-secondary">New Era - </span>
          <span>New Logic</span>
          <span className="text-secondary"> - Anjaayy</span>
        </div>
        <div className="text-5xl text-stroke mt-8 md:text-6xl">
          <p>Tahun Baru,</p>
          <p>Era Baru!</p>
        </div>
        <div className="min-w-[254px] mt-[10px] max-w-md">
          <div className="min-h-[200px] bg-secondary flex flex-col justify-center items-center relative rounded-2xl">
            <div className="w-[105px] h-[105px] rounded-full bg-primary"></div>
            <img src={gunung} alt="" className="w-full absolute bottom-0" />
          </div>
          <div className="bg-fourth rounded-b-2xl flex flex-row justify-center items-center gap-2 px-4 py-2">
            <p>Scan dan temukan pesan spesial untukmu</p>
            <img src={barcode} alt="" className="w-[60px] h-[60px]" />
          </div>
        </div>
        <ul className="list-disc list-inside mt-4">
          <li>Membakar rasa sakit dan memeluk kebahagiaan.</li>
          <li>Menanti harapan di tahun depan.</li>
          <li>Menjelajahi sudut pandang yang merangsang pemikiran.</li>
        </ul>
        <div className="w-full flex flex-col justify-center items-center mt-4">
          <hr className="h-0.5 w-full bg-secondary border-0 rounded" />
          <div className="flex flex-col justify-center items-center self-start w-full">
            <div className="flex flex-col justify-center items-center self-start w-full">
              <p className="self-start font-semibold py-2">
                Minggu, Desember 31
              </p>
              <hr className="h-0.5 w-full bg-secondary border-0 rounded" />
              <div className="flex flex-row justify-center items-center gap-2 self-start text-xs py-2">
                <a
                  href="https://maps.app.goo.gl/kesSiAfEg92bmaFZ6"
                  target="_blank"
                  className="underline  w-1/2"
                >
                  Farhan House
                </a>
                <hr className="h-full w-0.5 bg-secondary border-0 rounded" />
                <a
                  href="https://maps.app.goo.gl/kesSiAfEg92bmaFZ6"
                  target="_blank"
                  className=" underline"
                >
                  Jl. Engkos kosasih No.15B Mustikasari
                </a>
              </div>
            </div>
            <hr className="h-0.5 w-full bg-secondary border-0 rounded" />
            <div className="self-start flex flex-row justify-center items-center gap-2 py-2">
              <div className="flex flex-row justify-center items-center">
                <p>18.00</p>
                <p className="text-xs">pm</p>
              </div>
              <p className="text-xs font-light">sampai</p>
              <div className="flex flex-row justify-center items-center">
                <p>01.00</p>
                <p className="text-xs">am</p>
              </div>
            </div>
          </div>
          <hr className="h-0.5 w-full bg-secondary border-0 rounded" />
        </div>
        <a
          className="underline mt-8 select-none"
          onClick={() => history.back()}
        >
          Kembali
        </a>
      </div>
    </div>
  );
}

export default transition(DigitalInvitation);
