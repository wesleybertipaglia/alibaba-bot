import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { IntroModal } from "../components/intro-modal";
import { RobotForm } from "../components/robot-form";
import RobotCard from "../components/robot-card";
import type { Robot, RobotFormData } from "../types/robot";
import { generateRandomParts } from "../utils/robot-utils";

export default function HomePage() {
  const [showModal, setShowModal] = useState(true);
  const [robot, setRobot] = useState<Robot | null>(null);
  const [attemptsLeft, setAttemptsLeft] = useState(3);

  useEffect(() => {
    const storedAttempts = localStorage.getItem("robot-attempts-left");
    if (storedAttempts) {
      setAttemptsLeft(Number.parseInt(storedAttempts));
    }

    const currentRobot = localStorage.getItem("current-robot");
    if (currentRobot) {
      setRobot(JSON.parse(currentRobot));
      setShowModal(false);
    }
  }, []);

  const handleAccept = () => {
    setShowModal(false);
  };

  const handleCreateRobot = (data: RobotFormData) => {
    const newRobot: Robot = {
      id: uuidv4(),
      name: data.name,
      age: data.age,
      birthplace: data.birthplace,
      skill: data.skill,
      parts: generateRandomParts(),
      likes: 0,
      createdAt: new Date().toISOString(),
    };

    const robots = JSON.parse(localStorage.getItem("robots") || "[]");
    localStorage.setItem("robots", JSON.stringify([...robots, newRobot]));
    localStorage.setItem("current-robot", JSON.stringify(newRobot));

    setRobot(newRobot);
  };

  const handleGenerateAnother = () => {
    if (attemptsLeft > 0) {
      const newAttemptsLeft = attemptsLeft - 1;
      setAttemptsLeft(newAttemptsLeft);
      localStorage.setItem("robot-attempts-left", newAttemptsLeft.toString());

      localStorage.removeItem("current-robot");
      setRobot(null);
    }
  };

  const handleShare = () => {
    if (robot) {
      const shareUrl = `${window.location.origin}/robot/${robot.id}`;

      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy link:", err);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      {showModal && <IntroModal onAccept={handleAccept} />}

      {!showModal && !robot && <RobotForm onSubmit={handleCreateRobot} />}

      {!showModal && robot && (
        <RobotCard
          robot={robot}
          onShare={handleShare}
          onGenerateAnother={handleGenerateAnother}
          attemptsLeft={attemptsLeft}
          showLikeButton={false}
        />
      )}
    </div>
  );
}
