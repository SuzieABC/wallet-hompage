import Image from "next/image";
import bg from "@/assets/images/main/bottom_background.png";
import logoXLogo from "@/assets/images/main/logo_x_logo_image.png";
import phones from "@/assets/images/main/bottom_phone_image.png";

export default function FifthIntro({
  intro_5_title,
  intro_5_content,
}: {
  intro_5_title: string;
  intro_5_content: string;
}) {
  return (
    <div
      className={`px-[20px] flex flex-col items-center w-full relative gap-1.5 pt-[60px]`}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Image src={logoXLogo} alt="abc wallet logo" width={154} height={90} />
      <div className="flex flex-col justify-center items-center pt-[20px] pb-[24px] text-white font-pretendardMedium">
        <p>{intro_5_title}</p>
        <p>{intro_5_content}</p>
      </div>
      <Image src={phones} alt="phones" width={375} height={375} />
    </div>
  );
}
