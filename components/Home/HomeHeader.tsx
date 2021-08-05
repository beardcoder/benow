import Image from "next/image";
import { FunctionComponent } from "react";
import { UiButton } from "../Ui/Button/UiButton";

type Props = {};

export const HomeHeader: FunctionComponent<Props> = (): JSX.Element => {
  return (
    <header className="relative flex h-screen overflow-hidden min-h-240">
      <Image
        src="/assets/header.jpg"
        layout="fill"
        objectFit="cover"
        alt="Header image"
        className="z-0"
      ></Image>
      <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>
      <div className="container relative z-10 flex flex-col mx-auto mt-40">
        <p className="text-2xl text-white uppercase text-opacity-70">
          Innovation, Inspiration, Technik und Leidenschaft
        </p>
        <h1 className="font-bold text-white text-9xl">
          Webentwickler
          <br />
          Frontend Artist
          <br />
          Designer
        </h1>
        <div className="mt-8">
          <UiButton
            className="text-xl text-white"
            href="mailto:markussom@gmail.com"
          >
            Kontakt aufnehmen
          </UiButton>
        </div>
      </div>
      <div className="absolute w-full h-48 transform scale-110 bg-white -bottom-10 -rotate-3"></div>
    </header>
  );
};

export default HomeHeader;
