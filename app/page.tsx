"use client";
import Image from "next/image";
import { useState } from "react";
export default function EndorsementGenerator() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="w-full min-h-screen px-10  ">
        <Image src="/logo.svg" alt="Logo" width={140} height={140} />

        <section className="flex">
          {/* left  */}

          <div className=" w-full md:w-[80%] min-h-40 space-y-3  mt-4 ">
            <h2 className="text-[#F97316] text-[18px]">WorkSpace</h2>
            <h2 className="text-[55px] leading-13 w-full font-bold">
              Come see the space <br /> before the doors open.
            </h2>
            <p className=" text-[20px] text-[#4A4A4A] font-light mt-4 leading-7">
              Reserve your spot for a private preview of WorkSpace <br />
              — a new kind of workspace designed for how you <br /> actually
              work. Limited visits available.
            </p>
            <div className="px-10 py-2 rounded text-center text-[16px] bg-black text-white inline-block">
              <p>Reserve a spot</p>
            </div>
          </div>
          <div></div>
        </section>
        <section>
          <hr className="mt-4" />
          <div className=" rounded-lg flex flex-col sm:flex-row overflow-hidden mt-10">
            <div className="flex-1 border-b sm:border-b-0 sm:border-r border-gray-300 py-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold">12</h2>
              <p className="text-sm text-gray-600">Days</p>
            </div>

            <div className="flex-1 border-b sm:border-b-0 sm:border-r border-gray-300 py-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold">05</h2>
              <p className="text-sm text-gray-600">Hours</p>
            </div>

            <div className="flex-1 border-b sm:border-b-0 sm:border-r border-gray-300 py-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold">34</h2>
              <p className="text-sm text-gray-600">Minutes</p>
            </div>

            <div className="flex-1 py-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold">21</h2>
              <p className="text-sm text-gray-600">Seconds</p>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <p className="text-[16px] font-light text-[#22C55E]">
            The Space View
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {/* Item 1 → spans 2 columns */}
            <div className="md:col-span-2">
              <img
                src="/grid1.png"
                className="w-full h-full object-cover rounded-lg"
                alt=""
              />
            </div>

            {/* Item 2 → spans 2 rows in col 3 */}
            <div className="md:col-span-1 md:row-span-2">
              <img
                src="/grid2.png"
                className="w-full h-full object-cover rounded-lg"
                alt=""
              />
            </div>

            {/* Item 3 → row 2 col 1 */}
            <div>
              <img
                src="/grid3.png"
                className="w-full h-full object-cover rounded-lg"
                alt=""
              />
            </div>

            {/* Item 4 → row 2 col 2 */}
            <div>
              <img
                src="/grid4.png"
                className="w-full h-full object-cover rounded-lg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="mt-4">
          <p className="text-[16px] font-light text-[#F97316]">Booking</p>

          <div className="w-full mt-2 bg-white border border-gray-300 rounded-xl p-6 space-y-6">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Pick your visit</h2>

              <button className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                ✕
              </button>
            </div>
            {/* Choose date */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <p className=" text-[#4A4A4A] uppercase font-light whitespace-nowrap">
                  Choose a day{" "}
                </p>

                <div className="flex-1 h-px bg-gray-300" />
              </div>

              {/* Days selector */}
              <div className="flex gap-2 pt-3">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day, i) => {
                    const isSelected = selectedDay === day;

                    return (
                      <div
                        key={i}
                        onClick={() => setSelectedDay(day)}
                        className={`flex-1 text-center border rounded-lg py-2 text-sm cursor-pointer transition ${
                          isSelected
                            ? "bg-black text-white border-black"
                            : "border-gray-200 hover:bg-gray-100"
                        }`}>
                        {day}
                      </div>
                    );
                  },
                )}
              </div>

              <p className="text-[14px] text-[#D9A441] font-light">
                Saturday 7 June · 4 spots left
              </p>
            </div>
            {/* Details section */}
            <div className="flex items-center gap-3">
              <p className=" text-[#4A4A4A] font-light uppercase whitespace-nowrap">
                Your details
              </p>

              <div className="flex-1 h-px bg-gray-300" />
            </div>
            {/* Form */}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}>
              {" "}
              {/* Name */}
              <div className="space-y-1">
                <label className="text-sm text-gray-600 uppercase font-light">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border mt-2 border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-black"
                />
              </div>
              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm text-gray-600 uppercase font-light">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="sample@email.com"
                  className="w-full border mt-2 border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-black"
                />
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white rounded-lg py-3 font-medium hover:opacity-90 transition">
                Confirm Visit
              </button>
            </form>
            <p className="text-[14px] text-[#8A8A8A] font-light text-center">
              You'll receive a confirmation email with your booking reference.
            </p>{" "}
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center space-y-4 shadow-lg">
              {/* Icon */}
              <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-2xl">✓</span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold">Booking Confirmed</h2>

              {/* Message */}
              <p className="text-gray-600 text-sm">
                Your visit has been successfully scheduled. You’ll receive a
                confirmation email shortly.
              </p>

              {/* Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-black text-white rounded-lg py-3 hover:opacity-90 transition">
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <section>
        <div className="w-full flex flex-col items-center justify-center space-y-3 mt-10 p-2 bg-[#EAEAEA]">
          <Image src="/logo.svg" alt="Logo" width={180} height={180} />
          <p className="text-[14px] text-[#4D667F] font-light">
            Together, we’re creating opportunities, empowering lives, and making
            a difference—one story at a time.
          </p>

          <p className="text-[14git px] font-light text-[#27333F]">
            No 24, Road G, Malali New Extension
          </p>
          <p className="text-[14git px] font-light text-[#27333F]">
            +2348139414056
          </p>
          <p className="text-[14git px] font-light text-[#27333F]">
            info@thespace.com
          </p>
          <div className="flex gap-2">
            <Image src="/link.svg" alt="Logo" width={40} height={40} />
            <Image src="/twitter.svg" alt="Logo" width={40} height={40} />
            <Image src="/facebook.svg" alt="Logo" width={40} height={40} />

            <Image src="/instagram.svg" alt="Logo" width={40} height={40} />
            <Image src="/youtube.svg" alt="Logo" width={40} height={40} />
          </div>
        </div>
      </section>
    </>
  );
}
