import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(min = 3) {
  return new Promise((resolve) => setTimeout(resolve, min * 1000));
}

export function uppercaseTitle(city: string) {
  return city.charAt(0).toUpperCase() + city.slice(1);
}
