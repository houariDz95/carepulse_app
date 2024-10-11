import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative w-full h-2/3">
        <Image
          src="/bmw.jpg" // Replace with your image path
          alt="BMW Bike"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Holen Sie sich jetzt Ihr BMW-Bike!</h1>
        <p className="text-lg mb-6 text-gray-600">Geben Sie jetzt Ihre Daten ein, um loszulegen.</p>
        <Link href="https://singingfiles.com/show.php?l=0&u=1804823&id=67149" passHref>
          <button  className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300">
            Jetzt starten
          </button>
        </Link>
      </div>
    </div>
  );
}

