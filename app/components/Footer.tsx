export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo */}
        <div className="mb-8 md:mb-0">
          <span className="font-semibold text-2xl tracking-widest text-white select-none">
            ✈ TEST
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h4 className="text-white font-semibold mb-4">QUICK LINKS</h4>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h4 className="text-white font-semibold mb-4">LINKS</h4>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                Events
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                Gallery
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                Publication
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-semibold mb-4">SOCIALS</h4>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                Tik Tok
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                You Tube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
