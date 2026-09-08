interface GraffitiCardProps {
  image: string;
  title: string;
  description: string;
}

function GraffitiCard({
  image,
  title,
  description,
}: GraffitiCardProps) {
  return (
    <article className="w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-lg ">
      
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="h-75 w-full object-cover"
      />

      {/* Contenido */}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mb-5 text-gray-600">
          {description}
        </p>

        {/* Botón */}
        <button
          className="rounded-lg bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
        >
          Ver más
        </button>
      </div>

    </article>
  );
}

export default GraffitiCard;