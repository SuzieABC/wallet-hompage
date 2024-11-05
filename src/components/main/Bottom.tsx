import Image from "next/image";
import abcLogo from "@/assets/images/main/ci_company_logo_image.png";
import shape from "@/assets/images/main/bottom_shape_image.png";

export default function Bottom() {
  return (
    <div
      className="flex flex-col items-center w-full relative bg-[#211837] pt-[56px]"
      style={{
        backgroundImage: `url(${shape.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Image src={abcLogo} alt="abc logo" width={154} height={90} />
      <div className="w-full  flex flex-col justify-center items-center text-white text-4xl font-outfitExtrabold uppercase leading-[46.08px] pt-[20px] pb-[92px]">
        <span>Stay</span>
        <span>Secure,</span>
        <span>Explore</span>
        <span>Freeely</span>
      </div>
    </div>
  );
}
