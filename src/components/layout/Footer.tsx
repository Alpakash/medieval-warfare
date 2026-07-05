const Footer = () => {
  return (
    <footer className="py-4 px-4 text-center text-sm text-muted-foreground border-t">
      &copy; 2020 ~ {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;