import Image from "next/image";
import React from "react";
import prodImage from "@/assets/prod1.png"
const AlbumPage = () => {
  return (
    <div>
      <Image
        src=" https://i.ibb.co/x8Qc0Gt/A.jpg"
        height={500}
        width={500}
        alt="next logo"
      />
      <h2 whats the thing/>
      <Image
        src={prodImage}
        height={500}
        width={500}
        alt="next logo"
      />
    </div>
  );
};

export default AlbumPage;
