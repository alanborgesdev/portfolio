const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {currentYear} Alan Borges. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;