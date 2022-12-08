import "./footer.scss"
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer__container">
          <h5 className="text-center">{`${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()}`}</h5>
        </div>
      </footer>
    </>
  );
};
export default Footer;
