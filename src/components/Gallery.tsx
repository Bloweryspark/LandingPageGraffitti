function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1561214115-f2f134cc4912",
    "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342",
    "https://images.unsplash.com/photo-1549490349-8643362247b5",
    "https://images.unsplash.com/photo-1564399579883-451a5d44ec08",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
  ];

  return (

    //crea una cuadricula de 4 columnas (grid cols 4) y 2 filas (grid rows 2) y el gap da espacio entre las imagenes
    <div className="mx-auto grid max-w-6xl grid-cols-4 grid-rows-2 gap-3"> 

      {/* Imagen principal */}
      <img
        src={images[0]}
        alt="Graffiti en Bogotá"
        className="col-span-2 row-span-2 h-full w-full object-cover rounded-xl" //la primera imagen ocupa 2 columnas y 2 filas
      />

      {/* Imagen 2 */}
      <img
        src={images[1]}
        alt="Arte urbano"
        className="col-span-1 row-span-1 h-full w-full object-cover rounded-xl"
      />

      {/* Imagen 3 */}
      <img
        src={images[2]}
        alt="Graffiti"
        className="col-span-1 row-span-1 h-full w-full object-cover rounded-xl"
      />

      {/* Imagen 4 */}
      <img
        src={images[3]}
        alt="Arte callejero"
        className="col-span-1 row-span-1 h-full w-full object-cover rounded-xl"
      />

      {/* Imagen 5 */}
      <img
        src={images[4]}
        alt="Mural"
        className="col-span-1 row-span-1 h-full w-full object-cover rounded-xl"
      />

    </div>
  );
}

export default Gallery;