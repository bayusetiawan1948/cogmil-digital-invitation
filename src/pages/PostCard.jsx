import React from 'react';
import ranting from '../assets/image/ranting.webp';
import { useParams } from 'react-router-dom';
import transition from '../transition';

function PostCard() {
  const { name } = useParams();
  console.log(name);
  const nameParticipant =
    name !== undefined ? name.charAt(0).toUpperCase() + name.slice(1) : 'You';
  const redirect = () => {
    window.location.href = '/invitation';
  };
  return (
    <div className="md:flex justify-center items-center">
      <div className="bg-third text-primary font-RS h-screen max-h-screen w-full max-w-lg flex flex-col justify-start items-center px-8 py-6 overflow-hidden">
        <div className="flex flex-col gap-4">
          <p className="text-[42px] text-stroke">Hi, {nameParticipant}</p>
          <p className="text-[32px]">
            Tahun ini penuh kejutan, ya? Ayo kita tutup dengan kebahagiaan dan
            suka cita, serta nantikan tahun baru yang lebih baik bersama-sama.
          </p>
        </div>
        <div className="w-screen flex justify-center">
          <img src={ranting} alt="" />
        </div>
        <button
          className="bg-primary text-third p-4 rounded-lg mt-12 absolute bottom-24 text-xl"
          onClick={() => redirect()}
        >
          Jelajahi Kebahagiaan
        </button>
      </div>
    </div>
  );
}

export default transition(PostCard);
