import { useCurrentEditor } from "@tiptap/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ElementTagText = () => {
  const { editor } = useCurrentEditor();
  if (editor?.isActive("heading", { level: 1 })) {
    return "Heading 1";
  }
  if (editor?.isActive("heading", { level: 2 })) {
    return "Heading 2";
  }
  if (editor?.isActive("heading", { level: 3 })) {
    return "Heading 3";
  }

  return "Paragraph";
};

export function generateRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
  }

  return randomId;
}

export const getDay = (index: number) => {
  let day;
  switch (index) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      break;
  }

  return day;
};

export const getMonth = (index: number) => {
  let day;
  switch (index) {
    case 1:
      day = "January";
      break;
    case 2:
      day = "February";
      break;
    case 3:
      day = "March";
      break;
    case 4:
      day = "April";
      break;
    case 5:
      day = "May";
      break;
    case 6:
      day = "June";
      break;
    case 7:
      day = "July";
      break;
    case 8:
      day = "August";
      break;
    case 9:
      day = "September";
      break;
    case 10:
      day = "October";
      break;
    case 11:
      day = "November";
      break;
    case 12:
      day = "December";
      break;
    default:
      break;
  }

  return day;
};
