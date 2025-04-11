import type { RobotParts } from "../types/robot";

function generateRandomString(): string {
  return Math.random().toString(36).substring(2, 10);
}

export function generateRandomParts(): RobotParts {
  return {
    head: `part_${generateRandomString()}`,
    body: `part_${generateRandomString()}`,
    arms: `part_${generateRandomString()}`,
    feet: `part_${generateRandomString()}`,
  };
}
