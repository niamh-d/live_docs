import Image from "next/image";
import Link from "next/link";

const Header = ({ children }: { children: HeaderProps }) => {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          width={120}
          height={32}
          alt="logo with name"
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          width={120}
          height={32}
          alt="logo"
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
