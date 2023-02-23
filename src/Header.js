const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default title",
};
export default Header;
