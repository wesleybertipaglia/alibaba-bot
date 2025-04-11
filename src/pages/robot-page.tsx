"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Robot } from "../types/robot";
import RobotCard from "../components/robot-card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { mockGetRobot, mockLikeRobot } from "../api/mock-api";

export default function RobotPage() {
  const { id } = useParams<{ id: string }>();
  const [robot, setRobot] = useState<Robot | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    mockGetRobot(id)
      .then((data) => {
        setRobot(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Robot not found: " + err.message);
        setLoading(false);
      });
  }, [id]);

  const handleLike = () => {
    if (!robot) return;

    mockLikeRobot(robot.id)
      .then((updatedRobot) => {
        setRobot(updatedRobot);
      })
      .catch((err) => {
        console.error("Failed to like robot:", err);
      });
  };

  const handleCreateYourOwn = () => {
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse text-blue-400 text-xl font-mono">
          Loading robot data...
        </div>
      </div>
    );
  }

  if (error || !robot) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="text-red-400 text-xl font-mono">Robot not found</div>
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="font-mono"
        >
          <Home className="mr-2 h-4 w-4" /> Return Home
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6">
      <h1 className="text-3xl font-bold text-blue-400 font-mono tracking-wide mb-4">
        Robot Profile
      </h1>

      <RobotCard
        robot={robot}
        onLike={handleLike}
        onCreateYourOwn={handleCreateYourOwn}
        showLikeButton={true}
      />
    </div>
  );
}
