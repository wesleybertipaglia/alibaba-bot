"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { RobotParts } from "../types/robot";

interface RobotVisualizerProps {
  parts: RobotParts;
  name: string;
}

export default function RobotVisualizer({ parts, name }: RobotVisualizerProps) {
  const [robotColor, setRobotColor] = useState("#4299e1");

  useEffect(() => {
    const nameSum = name
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const hue = (nameSum % 60) + 180;
    const color = `hsl(${hue}, 80%, 60%)`;

    setRobotColor(color);
  }, [name]);

  const getPartNumber = (partString: string) => {
    const hash = partString.split("_")[1];
    return Number.parseInt(hash.substring(0, 2), 16) % 3;
  };

  const headType = getPartNumber(parts.head);
  const bodyType = getPartNumber(parts.body);
  const armsType = getPartNumber(parts.arms);
  const feetType = getPartNumber(parts.feet);

  return (
    <div className="flex justify-center items-center h-64 bg-gray-900/50 rounded-lg border border-blue-500/20 overflow-hidden">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-48 h-48"
      >
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          {headType === 0 && (
            <svg width="60" height="60" viewBox="0 0 60 60">
              <rect
                x="10"
                y="10"
                width="40"
                height="40"
                rx="5"
                fill={robotColor}
              />
              <circle cx="25" cy="30" r="5" fill="#111" />
              <circle cx="35" cy="30" r="5" fill="#111" />
            </svg>
          )}
          {headType === 1 && (
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill={robotColor} />
              <rect x="20" y="25" width="8" height="12" rx="2" fill="#111" />
              <rect x="32" y="25" width="8" height="12" rx="2" fill="#111" />
            </svg>
          )}
          {headType === 2 && (
            <svg width="60" height="60" viewBox="0 0 60 60">
              <polygon points="30,5 55,30 30,55 5,30" fill={robotColor} />
              <circle cx="25" cy="30" r="5" fill="#111" />
              <circle cx="35" cy="30" r="5" fill="#111" />
            </svg>
          )}
        </motion.div>

        <div className="absolute top-[45px] left-1/2 transform -translate-x-1/2">
          {bodyType === 0 && (
            <svg width="60" height="60" viewBox="0 0 60 60">
              <rect
                x="15"
                y="0"
                width="30"
                height="45"
                rx="5"
                fill={robotColor}
                opacity="0.9"
              />
            </svg>
          )}
          {bodyType === 1 && (
            <svg width="60" height="60" viewBox="0 0 60 60">
              <ellipse
                cx="30"
                cy="22"
                rx="20"
                ry="25"
                fill={robotColor}
                opacity="0.9"
              />
            </svg>
          )}
          {bodyType === 2 && (
            <svg width="60" height="60" viewBox="0 0 60 60">
              <polygon
                points="30,0 50,15 40,45 20,45 10,15"
                fill={robotColor}
                opacity="0.9"
              />
            </svg>
          )}
        </div>

        <motion.div
          className="absolute top-[50px] left-1/2 transform -translate-x-1/2"
          animate={{ rotate: [0, 2, 0, -2, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          {armsType === 0 && (
            <svg width="100" height="40" viewBox="0 0 100 40">
              <rect
                x="0"
                y="15"
                width="30"
                height="10"
                rx="5"
                fill={robotColor}
                opacity="0.8"
              />
              <rect
                x="70"
                y="15"
                width="30"
                height="10"
                rx="5"
                fill={robotColor}
                opacity="0.8"
              />
            </svg>
          )}
          {armsType === 1 && (
            <svg width="100" height="40" viewBox="0 0 100 40">
              <path
                d="M0,20 C10,10 20,5 30,15"
                stroke={robotColor}
                strokeWidth="8"
                fill="none"
              />
              <path
                d="M100,20 C90,10 80,5 70,15"
                stroke={robotColor}
                strokeWidth="8"
                fill="none"
              />
            </svg>
          )}
          {armsType === 2 && (
            <svg width="100" height="40" viewBox="0 0 100 40">
              <polygon
                points="0,15 25,20 30,25 25,30 0,25"
                fill={robotColor}
                opacity="0.8"
              />
              <polygon
                points="100,15 75,20 70,25 75,30 100,25"
                fill={robotColor}
                opacity="0.8"
              />
            </svg>
          )}
        </motion.div>

        <motion.div
          className="absolute top-[90px] left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 2, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          {feetType === 0 && (
            <svg width="60" height="50" viewBox="0 0 60 50">
              <rect
                x="10"
                y="0"
                width="10"
                height="40"
                rx="5"
                fill={robotColor}
                opacity="0.7"
              />
              <rect
                x="40"
                y="0"
                width="10"
                height="40"
                rx="5"
                fill={robotColor}
                opacity="0.7"
              />
            </svg>
          )}
          {feetType === 1 && (
            <svg width="60" height="50" viewBox="0 0 60 50">
              <path
                d="M15,0 L15,30 L5,45"
                stroke={robotColor}
                strokeWidth="8"
                fill="none"
              />
              <path
                d="M45,0 L45,30 L55,45"
                stroke={robotColor}
                strokeWidth="8"
                fill="none"
              />
            </svg>
          )}
          {feetType === 2 && (
            <svg width="60" height="50" viewBox="0 0 60 50">
              <polygon
                points="10,0 20,0 25,40 15,40"
                fill={robotColor}
                opacity="0.7"
              />
              <polygon
                points="40,0 50,0 45,40 35,40"
                fill={robotColor}
                opacity="0.7"
              />
            </svg>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
