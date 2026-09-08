import GraffitiCard from './components/GraffitiCard';
import Navbar from "./components/Navbar"
import EventCarousel from "./components/EventCarousel";
import Gallery from "./components/Gallery";

function App() {
  return (

<>
    <Navbar/>

     <section
          id="inicio"
          className=" flex items-center justify-center bg-gray-900"
        >
            <EventCarousel/>
        
        </section>

        <section
          id="historia"
          className="flex flex-col items-center  bg-gray-200"
        >
          <h1 className="text-5xl p-5 font-bold text-black">
            Historia del Graffiti
          </h1>
          
          <img src="https://graffitensis.com/wp-content/uploads/2021/12/post-breve-historia-graffitis-4-768x349.jpg" 
          alt="Historia del Graffiti" className="p-10" />

          <h2 className="text-2xl font-semibold text-black">
            ¿Qué es el graffiti?
          </h2>

          <p className="text-lg p-5 text-black">
La Real Academia de la Lengua Española define el grafiti como “firma, texto o composición pictórica que se deja en el espacio público, normalmente sin autorización”. Sin embargo, el grafiti existía mucho antes de que hubiese una palabra para nombrarlo.

Los primitivos trazos del homo sapiens en las cavernas son una buena muestra de ello, como dijo el artista urbano Blek le Rat “el primer stencil que se hizo en el mundo fue una mano en las cavernas”.

La historia del grafiti es muy diversa, cada grafiti tiene su propia historia y cada grafitero o writer le da vida de múltiples formas.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Filadelfia Y Nueva York, el inicio del graffiti moderno
          </h2>

          <p className="text-lg p-5 text-black">
            En los años 60 comienza la historia del grafiti moderno.

          Este fenómeno se originó en Filadelfia cuando un joven adolescente llamado Darryl McCray, considerado como el creador del grafiti, bombardeó todos los lugares posibles de Filadelfia con el tag “CornBread”, un apodo que le venía de su época en el reformatorio.

          Poco tiempo después, la ciudad de Nueva York se llena de grafitis de un tal Taki 183, un joven mensajero de origen griego llamado Dimitraki.

          Este fenómeno se vuelve tan famoso que, en 1971, el New York Times publica un reportaje sobre él. A partir de ese momento, tiene lugar en los Estados Unidos una explosión de grafitis y muchos jóvenes se suman a este movimiento, al encontrar en el arte urbano un medio de expresión de su identidad.

          Estos grafiteros se llaman así mismos “writers”, y los números que acompañan su tag son el número de su casa como seña de pertenencia.

          En los años 70 el grafiti evolucionará y se hará más complejo, dando lugar a nuevos estilos como el bubble, con Phase 2 a la cabeza, o el wildstyle, donde destacan Tracy 168 y Stay High.
          </p>
        </section>
        

      <section
        id="galeria"
        className="bg-gray-900 px-6 py-20"
      >
        <h2 className="mb-10 text-center text-5xl font-bold text-white">
          Galería
        </h2>

        <Gallery />
      </section>

     <div id="artistas" className="flex flex-wrap justify-center gap-8 bg-gray-200 px-6 py-20">

        <GraffitiCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndTdc6QOssG8snKZiLxC0PC1iHweRVvVJR5gkddT8ySHrp5xe-y-Rfzs&s=10"
          title="Frijol"
          description="Franco o mas conocido como Frijol, es un artista urbano colombiano que ha dejado su huella en las calles de Bogotá con su estilo único y colorido."
        />

        <GraffitiCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XL91c6SSQ5634V1wG2t5eYUNcMS1eZDc5JaRsuUKcwPxVtBbmZH-PULu&s=10"
          title="DUBS crew"
          description="Muros, fachadas y espacios públicos se convierten en lienzos para diferentes artistas pertenecientes a la crew DUBS, quienes con su talento y creatividad han dejado una marca imborrable en la ciudad de Bogotá."
        />

        <GraffitiCard
          image="https://scontent.fbog23-1.fna.fbcdn.net/v/t39.30808-6/489532437_24161461396790146_4765219453709728930_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x958&ctp=s1280x958&_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=JxGwAd7vrbQQ7kNvwG27QRt&_nc_oc=AdrWrN_ci187rXU5IWoWSWQBMmDw2h_KuHYvbbZOpFoCbUwrYjHJPaMS-ZqwGVJCG68&_nc_zt=23&_nc_ht=scontent.fbog23-1.fna&_nc_gid=q8EUi0SOdDHwc0JVAtAktg&_nc_ss=7b2a8&oh=00_AQKVF459HoEoarw7vIvYfdirRkr13YT-ufZNBGNKCv-35Q&oe=6AA654A8"
          title="Blow Oner"
          description="Blow Oner es un artista urbano colombiano conocido por su estilo innovador y su contribución al movimiento del graffiti en Bogotá."
        />

        <GraffitiCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwh2OyIsvVl68R1h5tIB2Cfgtso5Whk0wnukF02qj8tArf7I_81JJ0SFo&s=10"
          title="Devie"
          description="Devie es un muralista y artista urbano, que utiliza su estilo de doodle para crear obras de arte que dejan huella y transforman los espacios."
        />

      </div>


    </>
  );
}

export default App;