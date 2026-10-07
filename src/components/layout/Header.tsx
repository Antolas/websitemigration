import Image from 'next/image';
import Link from 'next/link';
import MobileNavbar from './MobileNavbar';
import NavbarButton from './NavbarButton';
import RegisterButton from './RegisterButton';
import StickyNavBar from './StickyNavBar';
import { StickyNavBarStyled } from './StickyNavBarStyled';

/** Fixed navigation bar present at the top of every page. */
export default function Header() {
  return (
    <StickyNavBar>
      <StickyNavBarStyled>
        <div className="navbar-container">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }} rel="preload">
            <Image
              src="/assets/images/platmosphere-lightmode-4x.png"
              alt="Platmosphere logo"
              sizes="100vw"
              height={42}
              width={230}
              className="platmosphere-logo"
            />
          </Link>
          <div className="desktop-navbar">
            <NavbarButton identifier="navbar-1" />
            <NavbarButton identifier="navbar-2" />
            <NavbarButton identifier="navbar-3" />
          </div>
          <div className="desktop-navbar-button">
            <RegisterButton />
          </div>
          <div className="mobile-navbar">
            <MobileNavbar />
          </div>
        </div>
      </StickyNavBarStyled>
    </StickyNavBar>
  );
}
