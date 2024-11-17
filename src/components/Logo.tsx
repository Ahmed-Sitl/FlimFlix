import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <figure className="rounded-full flex justify-center items-center w-16">
        <Image
          className="rounded-full"
          src="/filmflix.webp"
          width={64}
          height={64}
          alt="Description of the image"
        />
      </figure>
    </Link>
  );
};

export default Logo;
