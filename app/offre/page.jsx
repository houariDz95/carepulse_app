import Image from 'next/image';

export default function Home() {

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Full-Screen Image Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <Image 
          src="/bmw.jpg" // Replace with your image path
          alt="BMW Bike"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Holen Sie sich jetzt Ihr BMW-Bike!</h1>
          <p className="text-xl md:text-2xl mb-6">Geben Sie jetzt Ihre Daten ein, um loszulegen.</p>
          <a href="https://singingfiles.com/show.php?l=0&u=1804823&id=67149" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full">
            Jetzt teilnehmen!
          </a>
        </div>
      </div>

      {/* Content Section */}
      <section id="form-section" className="bg-gray-800 py-16 px-8 w-full">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Das Angebot gilt nur für Android- und Desktop-Nutzer!</h2>
          <p className="text-lg mb-4">Füllen Sie das Formular aus, um mehr über das BMW-Bike-Angebot zu erfahren.</p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input id="name" type="text" required className="block w-full mt-1 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">E-Mail-Adresse</label>
              <input id="email" type="email" required className="block w-full mt-1 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Telefonnummer</label>
              <input id="phone" type="tel" required className="block w-full mt-1 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md" />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-semibold">
              <a href="https://singingfiles.com/show.php?l=0&u=1804823&id=67149">
                Abschicken
              </a>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
