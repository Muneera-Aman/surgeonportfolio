import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowDown,
  ShieldCheck,
} from "lucide-react";

const photos = [
  "/images/checkingpatient.jpg",
  "/images/skull.jpg",
  "/images/skullteaching.jpg",
  "/images/surgery.jpg",
  "/images/teaching.jpg",
  "/images/surgeryphoto.jpg",
];


const STREAM_COUNT = 8;
const CARD_INTERVAL = 2.2;
const DURATION = STREAM_COUNT * CARD_INTERVAL;


function StreamPhoto({ index, side, reduce }) {
  const isLeft = side === "left";
  const photo = photos[index % photos.length];
  const direction = isLeft ? -1 : 1;

  const travelDistance = 65;

  const positions = [0, 0.25, 0.5, 0.75, 1];

  const xPositions = positions.map(
    (progress) =>
      `calc(-50% + ${direction * progress * travelDistance}vw)`
  );

  const scales = positions.map(
    (progress) => 0.12 + progress * 1.55
  );

  const staticProgress = (index + 1) / (STREAM_COUNT + 1);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 aspect-square overflow-hidden rounded-lg bg-slate-100 shadow-[0_12px_32px_rgba(10,43,67,0.16)]"
      style={{
        width: "clamp(60px, 13vw, 190px)",
        transformOrigin: "center center",
        backfaceVisibility: "hidden",
      }}
      initial={false}
      animate={
        reduce
          ? {
              x: `calc(-50% + ${
                direction * staticProgress * travelDistance
              }vw)`,
              y: "-50%",
              scale: 0.12 + staticProgress * 1.55,
              opacity: 1,
              rotateY: 0,
            }
          : {
             
              x: xPositions,
              y: "-50%",
              scale: scales,
              opacity: 1,
              rotateY: positions.map(
                (progress) => direction * -10 * progress
              ),
            }
      }
      transition={
        reduce
          ? { duration: 0 }
          : {
              duration: DURATION,
              delay: -index * CARD_INTERVAL,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              times: positions,
            }
      }
    >
      <img
        src={photo}
        alt={`Medical photography ${index + 1}`}
        className="block h-full w-full object-cover"
        loading="eager"
        draggable={false}
      />
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f8fbfd]">

      {/* Hero Heading */}
      <motion.div
        initial={
          reduce
            ? false
            : {
                opacity: 0,
                y: 20,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: reduce ? 0 : 0.8,
        }}
        className="relative z-10 mx-auto max-w-7xl px-5 pt-14 text-center md:pt-18"
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#087ea5] uppercase">
          <span className="h-2 w-2 rounded-full bg-[#087ea5]" />
          Neurosurgery · Kabul, Afghanistan
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.7rem,6vw,5.5rem)] font-semibold leading-[1.08] tracking-tight text-[#09233b]">
          Expert attention.
          <br />
          <span className="text-[#087ea5]">
            Thoughtful care.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500">
          Specialized brain, spine and nervous system
          consultations with Dr. Khalid Khan Zadran.
        </p>
      </motion.div>

      <div
        className="relative z-0 mx-auto -mt-20 h-90 w-full max-w-[1700px] overflow-hidden sm:-mt-24 sm:h-97.5 lg:-mt-28 lg:h-115"
        style={{
          perspective: "1200px",
        }}
        aria-label="Animated stream of medical photography"
      >
        {Array.from({ length: STREAM_COUNT }).map(
          (_, index) => (
            <StreamPhoto
              key={`left-${index}`}
              index={index}
              side="left"
              reduce={reduce}
            />
          )
        )}

        {Array.from({ length: STREAM_COUNT }).map(
          (_, index) => (
            <StreamPhoto
              key={`right-${index}`}
              index={index}
              side="right"
              reduce={reduce}
            />
          )
        )}

        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-linear-to-r from-[#f8fbfd]/20 to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-linear-to-l from-[#f8fbfd]/20 to-transparent" />
      </div>

      {/* ========================================
          Call-to-Action Buttons
      ======================================== */}

      <motion.div
        initial={
          reduce
            ? false
            : {
                opacity: 0,
                y: 20,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: reduce ? 0 : 0.7,
          delay: reduce ? 0 : 0.6,
        }}
        className="relative z-10 flex flex-col items-center px-5 pb-20 pt-3 text-center"
      >
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* Appointment Button */}
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 rounded-full bg-[#087ea5] px-7 py-4 font-medium text-white transition-all duration-300 hover:bg-[#075e80] hover:shadow-lg"
          >
            Request an Appointment
            <ArrowUpRight size={18} />
          </Link>

          {/* About Button */}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-medium text-[#09233b] transition-all duration-300 hover:bg-slate-50"
          >
            Meet the Doctor
            <ArrowDown size={18} />
          </Link>
        </div>

        {/* Clinic Information */}
        <p className="mt-9 flex items-center gap-2 text-sm text-slate-500">
          <ShieldCheck
            size={17}
            className="text-[#087ea5]"
          />
          Consultations at Rifah Medical Complex, Kabul
        </p>
      </motion.div>
    </section>
  );
}