"use client"

import { motion } from "framer-motion"

interface GraffitiBackgroundProps {
  variant?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

export function GraffitiBackground({ variant = 1 }: GraffitiBackgroundProps) {
  const elements = {
    1: <Variant1 />,
    2: <Variant2 />,
    3: <Variant3 />,
    4: <Variant4 />,
    5: <Variant5 />,
    6: <Variant6 />,
    7: <Variant7 />,
    8: <Variant8 />,
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {elements[variant]}
    </div>
  )
}

// Mirrored version of Variant1
function Variant8() {
  return (
    <div className="absolute inset-0">
      {/* Large skull outline top left */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -top-20 -left-20 w-98 h-80 text-gray-600"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="90" r="70" stroke="currentColor" strokeWidth="3" />
        <circle cx="70" cy="80" r="20" fill="currentColor" />
        <circle cx="130" cy="80" r="20" fill="currentColor" />
        <path d="M80 120 Q100 140 120 120" stroke="currentColor" strokeWidth="4" fill="none" />
        <rect x="85" y="150" width="8" height="20" fill="currentColor" />
        <rect x="100" y="150" width="8" height="20" fill="currentColor" />
        <rect x="115" y="150" width="8" height="20" fill="currentColor" />
      </motion.svg>

      {/* Crossed bones bottom right */}
      <motion.svg
        initial={{ opacity: 0, rotate: 20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-10 right-10 w-48 h-48 text-gray-500"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M10 10 L90 90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <circle cx="10" cy="10" r="8" fill="currentColor" />
        <circle cx="90" cy="90" r="8" fill="currentColor" />
        <path d="M90 10 L10 90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <circle cx="90" cy="10" r="8" fill="currentColor" />
        <circle cx="10" cy="90" r="8" fill="currentColor" />
      </motion.svg>

      {/* Red splatter */}
      <motion.svg
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-1/3 left-1/4 w-32 h-32 text-red-600"
        viewBox="0 0 100 100"
      >
        <path
          d="M50 10 Q70 30 90 50 Q70 70 50 90 Q30 70 10 50 Q30 30 50 10"
          fill="currentColor"
        />
        <circle cx="30" cy="20" r="8" fill="currentColor" />
        <circle cx="75" cy="75" r="6" fill="currentColor" />
        <ellipse cx="20" cy="60" rx="10" ry="15" fill="currentColor" />
      </motion.svg>

      {/* Drips */}
      <div className="absolute top-0 right-1/4 flex gap-8">
        {[40, 60, 35, 50].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height }}
            transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
            className="w-2 bg-gray-600 rounded-b-full"
          />
        ))}
      </div>

      {/* Abstract tag letters */}
      <motion.svg
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-1/4 left-10 w-40 h-24 text-gray-500"
        viewBox="0 0 120 60"
        fill="none"
      >
        <path d="M10 50 L20 10 L35 50 M15 35 H30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M45 10 L45 50 M45 10 Q70 10 70 30 Q70 50 45 50" stroke="currentColor" strokeWidth="4" fill="none" />
        <path d="M80 10 L80 50 M80 30 L100 30 M100 10 L100 50" stroke="currentColor" strokeWidth="4" />
      </motion.svg>
    </div>
  )
}

// Skull and bones style
function Variant1() {
  return (
    <div className="absolute inset-0">
      {/* Large skull outline top right */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -top-20 -right-20 w-98 h-80 text-gray-600"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="90" r="70" stroke="currentColor" strokeWidth="3" />
        <circle cx="70" cy="80" r="20" fill="currentColor" />
        <circle cx="130" cy="80" r="20" fill="currentColor" />
        <path d="M80 120 Q100 140 120 120" stroke="currentColor" strokeWidth="4" fill="none" />
        <rect x="85" y="150" width="8" height="20" fill="currentColor" />
        <rect x="100" y="150" width="8" height="20" fill="currentColor" />
        <rect x="115" y="150" width="8" height="20" fill="currentColor" />
        
      </motion.svg>

      {/* Crossed bones bottom left */}
      <motion.svg
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-10 left-10 w-48 h-48 text-gray-500"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M10 10 L90 90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <circle cx="10" cy="10" r="8" fill="currentColor" />
        <circle cx="90" cy="90" r="8" fill="currentColor" />
        <path d="M90 10 L10 90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <circle cx="90" cy="10" r="8" fill="currentColor" />
        <circle cx="10" cy="90" r="8" fill="currentColor" />
      </motion.svg>

      {/* Red splatter */}
      <motion.svg
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-1/3 right-1/4 w-32 h-32 text-red-600"
        viewBox="0 0 100 100"
      >
        <path
          d="M50 10 Q70 30 90 50 Q70 70 50 90 Q30 70 10 50 Q30 30 50 10"
          fill="currentColor"
        />
        <circle cx="30" cy="20" r="8" fill="currentColor" />
        <circle cx="75" cy="75" r="6" fill="currentColor" />
        <ellipse cx="20" cy="60" rx="10" ry="15" fill="currentColor" />
      </motion.svg>

      {/* Drips */}
      <div className="absolute top-0 left-1/4 flex gap-8">
        {[40, 60, 35, 50].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height }}
            transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
            className="w-2 bg-gray-600 rounded-b-full"
          />
        ))}
      </div>

      {/* Abstract tag letters */}
      <motion.svg
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-1/4 right-10 w-40 h-24 text-gray-500"
        viewBox="0 0 120 60"
        fill="none"
      >
        <path d="M10 50 L20 10 L35 50 M15 35 H30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M45 10 L45 50 M45 10 Q70 10 70 30 Q70 50 45 50" stroke="currentColor" strokeWidth="4" fill="none" />
        <path d="M80 10 L80 50 M80 30 L100 30 M100 10 L100 50" stroke="currentColor" strokeWidth="4" />
      </motion.svg>
    </div>
  )
}

// Eye and abstract shapes
function Variant2() {
  return (
    <div className="absolute inset-0">
      {/* Giant eye top left */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute -top-10 -left-10 w-64 h-64 text-gray-600"
        viewBox="0 0 200 200"
      >
        <ellipse cx="100" cy="100" rx="80" ry="50" stroke="currentColor" strokeWidth="4" fill="none" />
        <circle cx="100" cy="100" r="35" fill="currentColor" />
        <circle cx="100" cy="100" r="20" className="fill-red-600" />
        <circle cx="90" cy="90" r="8" fill="white" />
        {/* Veins */}
        <path d="M20 100 Q40 90 60 100" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 110 Q45 120 60 105" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M140 100 Q160 90 180 100" stroke="currentColor" strokeWidth="2" fill="none" />
      </motion.svg>

      {/* Abstract cloud/smoke shapes */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-1/2 right-0 w-56 h-40 text-gray-700"
        viewBox="0 0 200 120"
      >
        <path
          d="M20 80 Q30 40 60 50 Q80 20 120 40 Q160 30 180 60 Q190 90 160 100 Q120 110 80 100 Q40 110 20 80"
          fill="currentColor"
        />
      </motion.svg>

      {/* X marks */}
      {[
        { top: "20%", left: "60%", size: 30 },
        { top: "70%", left: "20%", size: 40 },
        { top: "80%", left: "70%", size: 25 },
      ].map((pos, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          className="absolute text-red-600"
          style={{ top: pos.top, left: pos.left, width: pos.size, height: pos.size }}
          viewBox="0 0 30 30"
        >
          <path d="M5 5 L25 25 M25 5 L5 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </motion.svg>
      ))}

      {/* Dripping element */}
      <motion.svg
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-20 left-1/3 w-16 h-32 text-gray-500"
        viewBox="0 0 40 100"
      >
        <rect x="10" y="0" width="20" height="60" rx="10" fill="currentColor" />
        <ellipse cx="20" cy="80" rx="12" ry="18" fill="currentColor" />
        <ellipse cx="8" cy="70" rx="6" ry="10" fill="currentColor" />
      </motion.svg>
    </div>
  )
}

// Spray cans and tags
function Variant3() {
  return (
    <div className="absolute inset-0">
      {/* Spray can */}
      <motion.svg
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: -15 }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 right-20 w-24 h-48 text-gray-600"
        viewBox="0 0 60 140"
      >
        <rect x="10" y="30" width="40" height="100" rx="5" fill="currentColor" />
        <rect x="20" y="10" width="20" height="25" rx="3" fill="currentColor" />
        <circle cx="30" cy="5" r="5" fill="currentColor" />
        <rect x="15" y="50" width="30" height="40" rx="2" className="fill-red-600" opacity="0.8" />
      </motion.svg>

      {/* Wild style letters */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-10 left-10 w-72 h-36 text-gray-500"
        viewBox="0 0 300 120"
        fill="none"
      >
        {/* Stylized graffiti letters with arrows and extensions */}
        <path
          d="M20 100 L40 20 L60 60 L80 20 L100 100"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M120 100 L120 20 L160 20 L160 60 L120 60 L160 100"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M180 100 L180 20 L220 60 L220 20 L220 100"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Arrow extensions */}
        <path d="M100 100 L130 110" stroke="currentColor" strokeWidth="4" />
        <path d="M125 105 L130 110 L125 115" stroke="currentColor" strokeWidth="3" fill="none" />
      </motion.svg>

      {/* Splatter spots */}
      {[
        { top: "30%", left: "50%", size: 60 },
        { top: "60%", right: "10%", size: 40 },
      ].map((pos, i) => (
        <motion.svg
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
          className="absolute text-red-600"
          style={{ ...pos, width: pos.size, height: pos.size }}
          viewBox="0 0 50 50"
        >
          <circle cx="25" cy="25" r="15" fill="currentColor" />
          <circle cx="10" cy="15" r="5" fill="currentColor" />
          <circle cx="40" cy="35" r="6" fill="currentColor" />
          <circle cx="35" cy="10" r="4" fill="currentColor" />
          <ellipse cx="15" cy="40" rx="8" ry="5" fill="currentColor" />
        </motion.svg>
      ))}

      {/* Drip lines */}
      <div className="absolute bottom-0 right-1/4 flex gap-4">
        {[80, 50, 70, 40, 60].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
            className="w-1.5 bg-gray-600 rounded-t-full origin-bottom"
            style={{ transform: "rotate(180deg)" }}
          />
        ))}
      </div>
    </div>
  )
}

// Abstract geometric chaos
function Variant4() {
  return (
    <div className="absolute inset-0">
      {/* Large abstract shape */}
      <motion.svg
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute -right-20 top-1/4 w-80 h-80 text-gray-600"
        viewBox="0 0 200 200"
      >
        <path
          d="M50 20 Q100 0 150 30 L180 80 Q200 120 170 160 L120 190 Q60 200 30 160 L10 100 Q0 50 50 20"
          fill="currentColor"
        />
        <path
          d="M70 50 Q90 40 110 55 L130 90 Q140 120 120 140 L90 150 Q60 145 55 120 L50 80 Q45 60 70 50"
          className="fill-zinc-900"
        />
      </motion.svg>

      {/* Overlapping circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-10 left-1/4"
      >
        <div className="w-24 h-24 rounded-full border-4 border-gray-500 absolute" />
        <div className="w-20 h-20 rounded-full border-4 border-red-600 absolute top-8 left-8" />
        <div className="w-16 h-16 rounded-full bg-gray-600 absolute top-4 left-16" />
      </motion.div>

      {/* Arrows pointing */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-20 left-20 w-32 h-20 text-gray-500"
        viewBox="0 0 100 50"
      >
        <path d="M0 25 L70 25" stroke="currentColor" strokeWidth="6" />
        <path d="M60 10 L80 25 L60 40" stroke="currentColor" strokeWidth="6" fill="none" strokeLinejoin="round" />
      </motion.svg>

      {/* Scattered rectangles */}
      {[
        { top: "60%", left: "60%", w: 40, h: 15, rotate: 25 },
        { top: "20%", left: "70%", w: 30, h: 10, rotate: -15 },
        { top: "75%", left: "30%", w: 25, h: 12, rotate: 45 },
      ].map((rect, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
          className="absolute bg-gray-500"
          style={{
            top: rect.top,
            left: rect.left,
            width: rect.w,
            height: rect.h,
            transform: `rotate(${rect.rotate}deg)`,
          }}
        />
      ))}
    </div>
  )
}

// Crown and character style
function Variant5() {
  return (
    <div className="absolute inset-0">
      {/* Crown */}
      <motion.svg
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 left-1/3 w-32 h-24 text-red-600"
        viewBox="0 0 100 70"
      >
        <path
          d="M10 60 L10 30 L25 45 L50 15 L75 45 L90 30 L90 60 Z"
          fill="currentColor"
        />
        <circle cx="25" cy="25" r="5" fill="currentColor" />
        <circle cx="50" cy="10" r="5" fill="currentColor" />
        <circle cx="75" cy="25" r="5" fill="currentColor" />
      </motion.svg>

      {/* Character face */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-10 right-10 w-48 h-48 text-gray-600"
        viewBox="0 0 150 150"
      >
        <circle cx="75" cy="75" r="60" stroke="currentColor" strokeWidth="4" fill="none" />
        {/* Crazy eyes */}
        <circle cx="55" cy="65" r="18" fill="currentColor" />
        <circle cx="95" cy="65" r="18" fill="currentColor" />
        <circle cx="55" cy="65" r="8" fill="white" />
        <circle cx="95" cy="65" r="8" fill="white" />
        <circle cx="58" cy="62" r="3" fill="currentColor" />
        <circle cx="98" cy="62" r="3" fill="currentColor" />
        {/* Wide grin */}
        <path
          d="M45 100 Q75 130 105 100"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path d="M55 100 L55 110" stroke="currentColor" strokeWidth="3" />
        <path d="M75 105 L75 115" stroke="currentColor" strokeWidth="3" />
        <path d="M95 100 L95 110" stroke="currentColor" strokeWidth="3" />
      </motion.svg>

      {/* Stars scattered */}
      {[
        { top: "40%", left: "20%", size: 30 },
        { top: "25%", right: "25%", size: 25 },
        { top: "70%", left: "50%", size: 20 },
      ].map((pos, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0, rotate: 180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
          className="absolute text-gray-500"
          style={{ ...pos, width: pos.size, height: pos.size }}
          viewBox="0 0 30 30"
        >
          <path
            d="M15 2 L18 11 L27 11 L20 17 L23 27 L15 21 L7 27 L10 17 L3 11 L12 11 Z"
            fill="currentColor"
          />
        </motion.svg>
      ))}

      {/* Bubble letters outline */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-1/2 left-5 w-24 h-16 text-gray-600"
        viewBox="0 0 80 50"
        fill="none"
      >
        <ellipse cx="20" cy="25" rx="15" ry="20" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="50" cy="25" rx="18" ry="20" stroke="currentColor" strokeWidth="3" />
      </motion.svg>
    </div>
  )
}

// Brick and drip style
function Variant6() {
  return (
    <div className="absolute inset-0">
      {/* Brick pattern corner */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 w-48 h-32 text-gray-700"
        viewBox="0 0 150 100"
      >
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={col * 50 + (row % 2 === 0 ? 0 : 25)}
              y={row * 25}
              width="45"
              height="22"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              rx="2"
            />
          ))
        )}
      </motion.svg>

      {/* Heavy drips */}
      <div className="absolute top-0 right-20 flex gap-6">
        {[100, 70, 120, 50, 90, 60].map((height, i) => (
          <motion.svg
            key={i}
            initial={{ height: 0 }}
            animate={{ height }}
            transition={{ duration: 1.2, delay: i * 0.1 }}
            className="w-4 text-gray-600"
            style={{ height }}
            viewBox="0 0 20 100"
            preserveAspectRatio="none"
          >
            <path
              d="M10 0 L10 85 Q10 100 10 100"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="10" cy="95" rx="8" ry="5" fill="currentColor" />
          </motion.svg>
        ))}
      </div>

      {/* Red drip accent */}
      <motion.svg
        initial={{ height: 0 }}
        animate={{ height: 150 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-0 left-1/2 w-6 text-red-600"
        style={{ height: 150 }}
        viewBox="0 0 30 150"
        preserveAspectRatio="none"
      >
        <path
          d="M15 0 L15 130"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <ellipse cx="15" cy="140" rx="12" ry="10" fill="currentColor" />
      </motion.svg>

      {/* Throw-up style bubble */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-1/3 right-10 w-40 h-32 text-gray-600"
        viewBox="0 0 120 90"
      >
        <path
          d="M20 70 Q5 50 20 30 Q35 10 60 15 Q90 5 100 30 Q115 50 100 70 Q80 85 50 80 Q25 85 20 70"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
        />
      </motion.svg>
    </div>
  )
}

// Full chaos mix
function Variant7() {
  return (
    <div className="absolute inset-0">
      {/* Multiple overlapping elements */}
      
      {/* Large abstract blob */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -right-20 w-96 h-96 text-gray-700"
        viewBox="0 0 200 200"
      >
        <path
          d="M40 60 Q60 20 100 30 Q150 10 170 50 Q190 100 160 140 Q140 180 90 170 Q40 180 20 140 Q0 100 40 60"
          fill="currentColor"
        />
      </motion.svg>

      {/* Skull small */}
      <motion.svg
        initial={{ opacity: 0, rotate: 20 }}
        animate={{ opacity: 1, rotate: 10 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-20 left-20 w-20 h-20 text-gray-500"
        viewBox="0 0 50 50"
      >
        <circle cx="25" cy="22" r="18" fill="currentColor" />
        <circle cx="18" cy="20" r="5" className="fill-zinc-900" />
        <circle cx="32" cy="20" r="5" className="fill-zinc-900" />
        <path d="M18 32 L20 38 L25 35 L30 38 L32 32" fill="currentColor" />
      </motion.svg>

      {/* Eye */}
      <motion.svg
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-1/4 left-1/4 w-24 h-16 text-gray-600"
        viewBox="0 0 80 50"
      >
        <ellipse cx="40" cy="25" rx="35" ry="20" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="40" cy="25" r="12" fill="currentColor" />
        <circle cx="40" cy="25" r="6" className="fill-red-600" />
      </motion.svg>

      {/* Red splatters */}
      {[
        { top: "15%", left: "45%" },
        { top: "65%", right: "15%" },
        { top: "80%", left: "10%" },
      ].map((pos, i) => (
        <motion.svg
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
          className="absolute w-16 h-16 text-red-600"
          style={pos}
          viewBox="0 0 40 40"
        >
          <circle cx="20" cy="20" r="10" fill="currentColor" />
          <circle cx="8" cy="12" r="4" fill="currentColor" />
          <circle cx="32" cy="28" r="5" fill="currentColor" />
          <circle cx="28" cy="8" r="3" fill="currentColor" />
        </motion.svg>
      ))}

      {/* Drips from top */}
      <div className="absolute top-0 left-10 flex gap-10">
        {[50, 80, 35, 65].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: h }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            className={`w-2 rounded-b-full ${i === 1 ? "bg-red-600" : "bg-gray-600"}`}
          />
        ))}
      </div>

      {/* X marks */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-10 right-1/3 w-12 h-12 text-gray-500"
        viewBox="0 0 30 30"
      >
        <path d="M5 5 L25 25 M25 5 L5 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </motion.svg>

      {/* Small bones */}
      <motion.svg
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-1/2 right-20 w-16 h-6 text-gray-500"
        viewBox="0 0 60 20"
      >
        <path d="M5 10 L55 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <circle cx="5" cy="10" r="5" fill="currentColor" />
        <circle cx="55" cy="10" r="5" fill="currentColor" />
      </motion.svg>
    </div>
  )
}
