import Image from 'next/image'

export default function Offre() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white h-screen flex items-center justify-center">
        {/* Background Image */}
        <Image 
          src="/bmw.jpg" 
          alt="BMW Bike" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-50"
        />
        
        {/* Overlay Content */}
        <div className="z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Holen Sie sich jetzt Ihr BMW-Bike!</h1>
          <p className="text-xl md:text-2xl mb-6">Geben Sie jetzt Ihre Daten ein, um loszulegen.</p>
          
          {/* Call to Action Button */}
          <a href="https://singingfiles.com/show.php?l=0&u=1804823&id=67149" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full">
            Jetzt teilnehmen!
          </a>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="bg-white py-16 px-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Geben Sie Ihre Daten ein</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input id="name" type="text" required className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail-Adresse</label>
              <input id="email" type="email" required className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefonnummer</label>
              <input id="phone" type="tel" required className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md" />
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
    </>
  );
}
