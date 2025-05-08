export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">GitHub</span>
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
          <p className="text-gray-300">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }