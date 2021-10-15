import { useDispatch } from "react-redux";
import { redirect } from "./store";

const NavLink = ({ page, children }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(redirect(page));
  };
  const active = false;
  if (active) return <span>{children}</span>;

  return (
    <li>
      <a href={`#${page}`} onClick={handleClick}>
        {children}
      </a>
    </li>
  );
};

export default NavLink;
