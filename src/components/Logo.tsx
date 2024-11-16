import Image from "next/image";

const Logo = () => {
  return (
    <figure className="rounded-full flex justify-center items-center w-16 bg-red-300">
      <Image
        className="rounded-full"
        src="/filmflix.webp"
        width={64}
        height={64}
        alt="Description of the image"
      />
    </figure>
  );
};

export default Logo;
