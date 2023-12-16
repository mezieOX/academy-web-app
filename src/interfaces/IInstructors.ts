import { StaticImageData } from "next/image";

export interface IInstructors {
  id: number;
  image: StaticImageData;
  name: string;
  job: string;
}
