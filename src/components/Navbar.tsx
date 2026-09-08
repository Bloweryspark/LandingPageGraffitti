function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black px-8 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">

      {/* <nav
    className="fixed top-0 left-0 z-50 w-full bg-cover bg-center px-8 py-4"
    style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1561214115-f2f134cc4912')"
    }}
    ></nav> */} 
      

        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 text-2xl font-black uppercase tracking-wider text-white"
        >
        <img src="https://cdn-icons-png.flaticon.com/512/3419/3419600.png" alt="Graffiti Bogotá" className="h-10 w-10" />
          Graffiti Bogotá
        </a>

        {/* Links */}
        <div className="flex gap-8">
          <a
            href="#inicio"
            className="font-semibold text-white transition hover:text-gray-400"
          >
            Inicio
          </a>

          <a
            href="#historia"
            className="font-semibold text-white transition hover:text-white-440"
          >
            Historia
          </a>

          <a
            href="#galeria"
            className="font-semibold text-white transition hover:text-gray-400"
          >
            Galería
          </a>

          <a
            href="#artistas"
            className="font-semibold text-white transition hover:text-gray-400"
          >
            Artistas
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;