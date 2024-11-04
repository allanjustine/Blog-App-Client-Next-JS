import Link from "next/link";

export default function Home() {
  return (
    <div 
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?cs=srgb&dl=pexels-pixabay-269583.jpg&fm=jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center p-10 bg-black bg-opacity-40 rounded shadow-lg">
        <h1 className="text-4xl font-bold text-white-800 mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-white-600 mb-8">
          Start your journey with us and explore our amazing blog!
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href="/login"
            className="px-3 py-3 text-white text-sm bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <i className="far fa-rocket"></i> Get Started
          </Link>
          <Link
            href="/blog"
            className="px-3 py-3 text-sm text-white-600 border border-blue-600 rounded-lg shadow hover:bg-blue-600 hover:text-white transition"
          >
            <i className="far fa-magnifying-glass"></i> Explore Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
