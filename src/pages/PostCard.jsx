import React from 'react';
import ranting from '../assets/image/ranting.webp';
import { useLocation } from 'react-router-dom';
import transition from '../transition';

const PostCard = () => {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  const name = query.get('name') !== null ? query.get('name') : 'You';
  const nameParticipant =
    name !== undefined ? name.charAt(0).toUpperCase() + name.slice(1) : 'You';
  return (
    <div className="md:flex justify-center items-center">
      <div className="bg-third text-primary font-RS h-screen max-h-screen w-full max-w-lg flex flex-col justify-start items-center px-8 py-6 overflow-x-hidden">
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
        <a
          href="/invitation"
          className="bg-primary text-third p-4 rounded-lg mt-12 absolute bottom-24 text-xl"
        >
          <button>Jelajahi Kebahagiaan</button>
        </a>
      </div>
    </div>
  );
};

export default transition(PostCard);
