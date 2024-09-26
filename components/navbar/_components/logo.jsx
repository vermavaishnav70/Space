import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <Image
          src="/logos/bird-logo.png"
          alt="logo"
          width={150}
          height={150}
          className="
                    w-24 dark:hidden
                  "
        />

        <Image
          src="/logos/bird-logo.png"
          alt="logo"
          width={150}
          height={150}
          className=" invert
                    w-24 hidden dark:block
                  "
        />
      </Link>
    </>
  );
};

export default Logo;
