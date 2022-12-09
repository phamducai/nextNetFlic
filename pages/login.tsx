import Head from "next/head";
import Image from "next/image";
import React from "react";

function login() {
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10  opacity-60 sm:!inline"
        objectFit="cover"
        alt=""
      />
      <img
        alt=""
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form
        action=""
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div>
          <label htmlFor="" inline-block w-full>
            <input type="email" placeholder="Email" className="input" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default login;
