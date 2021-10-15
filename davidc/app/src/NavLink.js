import { useDispatch } from "react-redux";
import { redirect } from "./store";

const NavLink = ({ page, children }) => {
  // handleClick => dispatch(redirect(..))   <---- useDispatch
  // active = ??                             <---- useSelector
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(redirect(page));
  };

  const active = false; // TODO select from store
  if (active) return <span>{children}</span>;

  return (
    <a href={`#${page}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default NavLink;
