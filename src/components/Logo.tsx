import Image from "next/image";
import Link from "next/link";

interface Props {
  fontSize?: number;
}

const Logo = ({ fontSize }: Props) => {
  return (
    <Link href="/">
      <figure>
        <Image
          className="rounded-full"
          src="/filmflix.webp"
          width={fontSize}
          height={fontSize}
          alt="Film Flix Logo"
        />
      </figure>
    </Link>
  );
};

export default Logo;
