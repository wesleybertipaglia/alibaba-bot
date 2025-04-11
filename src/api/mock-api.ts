import type { Robot } from "../types/robot";

let robots: Robot[] = [];

const initRobots = () => {
  try {
    const storedRobots = localStorage.getItem("robots");
    if (storedRobots) {
      robots = JSON.parse(storedRobots);
    }
  } catch (error) {
    console.error("Error loading robots from localStorage:", error);
  }
};

initRobots();

export const mockGetRobot = (id: string): Promise<Robot> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const storedRobots = localStorage.getItem("robots");
        if (storedRobots) {
          const parsedRobots = JSON.parse(storedRobots);
          const robot = parsedRobots.find((r: Robot) => r.id === id);
          if (robot) {
            return resolve(robot);
          }
        }
      } catch (error) {
        console.error("Error reading from localStorage:", error);
      }

      const robot = robots.find((r) => r.id === id);

      if (robot) {
        resolve(robot);
      } else {
        reject(new Error("Robot not found"));
      }
    }, 800);
  });
};

export const mockLikeRobot = (id: string): Promise<Robot> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const storedRobots = localStorage.getItem("robots");
        if (storedRobots) {
          const parsedRobots = JSON.parse(storedRobots);
          const robotIndex = parsedRobots.findIndex((r: Robot) => r.id === id);

          if (robotIndex !== -1) {
            parsedRobots[robotIndex].likes =
              (parsedRobots[robotIndex].likes || 0) + 1;
            localStorage.setItem("robots", JSON.stringify(parsedRobots));
            return resolve(parsedRobots[robotIndex]);
          }
        }
      } catch (error) {
        console.error("Error updating localStorage:", error);
      }

      const robotIndex = robots.findIndex((r) => r.id === id);

      if (robotIndex !== -1) {
        robots[robotIndex].likes = (robots[robotIndex].likes || 0) + 1;
        resolve(robots[robotIndex]);
      } else {
        reject(new Error("Robot not found"));
      }
    }, 500);
  });
};
