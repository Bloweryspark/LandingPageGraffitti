import { useState } from "react";

function EventCarousel() {
  const [current, setCurrent] = useState(0);

  const events = [
    {
      image:
        "https://images.unsplash.com/photo-1564399579883-451a5d44ec08",
      title: "Festival de Arte Urbano",
      description:
        "Un encuentro que reúne artistas urbanos para transformar los espacios de Bogotá.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342",
      title: "Exposición de Graffiti",
      description:
        "Una muestra dedicada a las diferentes expresiones del arte urbano contemporáneo.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1561214115-f2f134cc4912",
      title: "Bogotá como lienzo",
      description:
        "Recorre algunos de los muros que han convertido las calles de Bogotá en galerías.",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl">

        {/* Imagen */}
        <img
          src={events[current].image}
          alt={events[current].title}
          className="h-100 w-500 object-cover"
        />

        {/* Degradado */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Texto */}
        <div className="absolute bottom-0 left-0 max-w-2xl p-10 text-white">
          <h2 className="mb-4 text-4xl font-bold">
            {events[current].title}
          </h2>

          <p className="text-lg">
            {events[current].description}
          </p>
        </div>

        {/* Flecha izquierda */}
        <button
          onClick={() =>
            setCurrent(
              (current - 1 + events.length) % events.length
            )
          }
          className="absolute left-5 top-1/2 -translate-y-1/2 text-5xl text-white"
        >
          ‹
        </button>

        {/* Flecha derecha */}
        <button
          onClick={() =>
            setCurrent((current + 1) % events.length)
          }
          className="absolute right-5 top-1/2 -translate-y-1/2 text-5xl text-white"
        >
          ›
        </button>

      </div>
    </section>
  );
}

export default EventCarousel;