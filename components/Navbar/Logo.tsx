
import Link from "next/link";
import Logos from "@/images/7seven.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="size-20 ">
      <Link href="/">
        <Image src={Logos} width={100} height={100} alt="Logo" priority />
      </Link>
    </div>
  );
};

export default Logo;
