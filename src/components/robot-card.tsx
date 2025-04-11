import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Share2, RefreshCw, Heart, Home } from "lucide-react";
import type { Robot } from "../types/robot";
import RobotVisualizer from "./robot-visualizer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface RobotCardProps {
  robot: Robot;
  onShare?: () => void;
  onGenerateAnother?: () => void;
  onLike?: () => void;
  onCreateYourOwn?: () => void;
  attemptsLeft?: number;
  showLikeButton: boolean;
}

export default function RobotCard({
  robot,
  onShare,
  onGenerateAnother,
  onLike,
  onCreateYourOwn,
  attemptsLeft,
  showLikeButton,
}: RobotCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <Card className="bg-gray-800/70 border-blue-500/30 text-gray-100 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 pb-2">
          <CardTitle className="text-2xl font-mono text-center text-blue-300">
            Robot Card
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="mb-6">
            <RobotVisualizer parts={robot.parts} name={robot.name} />
          </div>

          <div className="space-y-3 bg-gray-900/50 p-4 rounded-lg border border-blue-500/20">
            <div>
              <span className="text-blue-400 font-mono">NAME:</span>
              <p className="text-lg font-semibold">{robot.name}</p>
            </div>

            <div>
              <span className="text-blue-400 font-mono">AGE:</span>
              <p className="text-lg">{robot.age} operational years</p>
            </div>

            <div>
              <span className="text-blue-400 font-mono">BIRTHPLACE:</span>
              <p className="text-lg">{robot.birthplace}</p>
            </div>

            <div>
              <span className="text-blue-400 font-mono">SPECIAL ABILITY:</span>
              <p className="text-lg">{robot.skill}</p>
            </div>

            {showLikeButton && (
              <div>
                <span className="text-blue-400 font-mono">LIKES:</span>
                <p className="text-lg">{robot.likes}</p>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 pt-2 pb-6">
          {onShare && (
            <Button
              onClick={onShare}
              className="w-full bg-blue-600 hover:bg-blue-700 gap-2"
            >
              <Share2 size={18} />
              Share my robot
            </Button>
          )}

          {onGenerateAnother && attemptsLeft !== undefined && (
            <Button
              onClick={onGenerateAnother}
              variant="outline"
              className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-900/20 gap-2"
              disabled={attemptsLeft === 0}
            >
              <RefreshCw size={18} />I want to generate another
              {attemptsLeft > 0 && (
                <span className="ml-1">({attemptsLeft} attempts left)</span>
              )}
            </Button>
          )}

          {attemptsLeft === 0 && onGenerateAnother && (
            <p className="text-red-400 text-sm text-center mt-2">
              You have reached the maximum number of attempts!
            </p>
          )}

          {showLikeButton && onLike && (
            <Button
              onClick={onLike}
              className="w-full bg-purple-600 hover:bg-purple-700 gap-2"
            >
              <Heart size={18} />
              Like this robot
            </Button>
          )}

          {onCreateYourOwn && (
            <Button
              onClick={onCreateYourOwn}
              variant="outline"
              className="w-full border-green-500/30 text-green-300 hover:bg-green-900/20 gap-2"
            >
              <Home size={18} />
              Create your own robot
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
