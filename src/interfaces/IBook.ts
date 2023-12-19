import { StaticImageData } from "next/image";

export interface IBook {
  id: number;
  title: string;
  image: StaticImageData;
  status: string;
  point: string;
  image2: StaticImageData;
  instructorJob: string;
  instructorName: string;
}
