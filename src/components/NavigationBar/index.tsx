import { Container, NavLink } from "./styles";
import Link from "next/link";
import { BiBook, BiHomeAlt, BiUser } from "react-icons/bi";

interface NavigationBarProps {
  activeItem: number;
}

export function NavigationBar({ activeItem }: NavigationBarProps) {
  return (
    <Container>
      <div>
        <Link href="/">
          <NavLink isActive={activeItem === 1}>
            <BiHomeAlt size="22" />
            <span>Home</span>
          </NavLink>
        </Link>

        <Link href="#1">
          <NavLink isActive={activeItem === 2}>
            <BiBook size="22" />
            <span>Libraries</span>
          </NavLink>
        </Link>

        <Link href="#2">
          <NavLink isActive={activeItem === 3}>
            <BiUser size="22" />
            <span>Profile</span>
          </NavLink>
        </Link>
      </div>
    </Container>
  );
}
