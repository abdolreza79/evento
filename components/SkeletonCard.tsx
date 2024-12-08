import Image from "next/image";

export default function SkeletonCard() {
  return (
    <div className="flex-1 basis-80 max-w-[500px] h-[380px]">
      <div className="relative w-full h-full flex flex-col flex-1 bg-white/[3%] rounded-lg overflow-hidden state-effects">
        <Image
          src="/placeholder-image.png"
          alt="image-placeholder"
          width={100}
          height={280}
          className="object-cover  animate-pulse w-full h-[60%]"
        />
        <div className="flex flex-col  flex-1 items-center justify-center">
          <h2 className="text-2xl font-semibold w-52 h-2 rounded-md animate-pulse"></h2>
          <p className="bg-white/75 italic w-52 h-2 rounded-md animate-pulse"></p>
          <p className="bg-white/70 text-sm mt-4 w-52 h-2 rounded-md animate-pulse"></p>
          <p className="bg-white/70 text-sm mt-4 w-52 h-2 rounded-md animate-pulse"></p>
        </div>
      </div>
    </div>
  );
}
