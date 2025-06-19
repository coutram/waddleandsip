import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indigo-600">Waddle and Sip</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#icepop" className="text-gray-700 hover:text-indigo-600 transition-colors">Meet Icepop</a>
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-100 via-white to-blue-200">
        {/* Snowflake SVG background */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-30 z-0">
          <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="snow" width="80" height="80" patternUnits="userSpaceOnUse">
                <text x="0" y="60" fontSize="60" fill="#c7d2fe">❄️</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#snow)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-indigo-700 mb-6 leading-tight drop-shadow-lg">
              Chill Responsibly<br />
              <span className="text-blue-400">with Icepop</span>
            </h1>
            <p className="text-xl font-body text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
              Designer zero proof drinks for every adventure. Hand-crafted, full of flavor, and always fun—just like our mascot!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-bold font-heading shadow-lg hover:bg-indigo-700 transition-colors">
                Shop Now
              </button>
              <button className="bg-white border-2 border-indigo-400 text-indigo-700 px-8 py-3 rounded-full text-lg font-bold font-heading shadow hover:bg-indigo-50 transition-colors">
                Meet Icepop
              </button>
            </div>
          </div>
          {/* Right: Mascot and Label */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <img
              src="/label.png"
              alt="Waddle and Sip - Icepop's Iced Espresso Martini Label"
              className="w-64 h-80 object-contain rounded-3xl shadow-2xl border-4 border-blue-200 bg-blue-50 mb-4"
            />
            <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center shadow-lg border-4 border-white -mt-12 overflow-hidden">
              <img
                src="/icepop.png"
                alt="Icepop the Penguin Mascot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Label/Bottle Visual Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <div className="flex-1 flex justify-center">
            {/* Actual label image */}
            <img
              src="/label.png"
              alt="Waddle and Sip - Icepop's Iced Espresso Martini Label"
              className="w-64 h-80 object-contain rounded-lg shadow-inner border border-indigo-100 bg-blue-50"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Icepop's Iced Espresso Martini</h2>
            <p className="text-lg text-gray-700 mb-2">Zero Proof – Ready to Drink</p>
            <p className="text-gray-600 mb-2">750 mL | 100% Taste | Aroha Flavor</p>
            <p className="text-gray-600 mb-2">Hand Crafted | Limited Edition</p>
            <p className="text-indigo-600 font-semibold mt-4">Chill Responsibly</p>
          </div>
        </div>
      </section>

      {/* Icepop's Story Section */}
      <section id="icepop" className="py-20 bg-gradient-to-r from-blue-100 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-8">
            {/* Icepop mascot illustration */}
            <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center mb-4 shadow-lg overflow-hidden">
              <img
                src="/icepop.png"
                alt="Icepop the Penguin Mascot"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl font-bold text-indigo-700 mb-2">Meet Icepop</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Icepop is a spirited and adventurous penguin from the frosty landscapes of Antarctica. Born on December 8, he thrives in the winter wonderland he calls home. When he's not out exploring or discovering new things, Icepop loves cozying up inside a furry blanket by a warm fire, sipping on his favorite treat—hot cocoa.
            </p>
          </div>
          <div className="text-gray-700 text-lg max-w-2xl mx-auto">
            With his bright eyes and carefree spirit, Icepop lights up every room (or iceberg!) he waddles into. Known for his kind heart and contagious smile, he always brings joy to everyone around him. Icepop's playful side shines through in his love for games, especially his favorite—hide and seek. Whether he's darting through snowy tunnels or sliding down icy slopes, Icepop's enthusiasm for fun and friendship makes him the life of any gathering.
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Waddle and Sip?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designer zero-proof beverages, crafted for those who crave adventure, flavor, and fun—without compromise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Proof, Full Flavor</h3>
              <p className="text-gray-600">Enjoy the taste and experience of a crafted cocktail—without the alcohol.</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Designer Quality</h3>
              <p className="text-gray-600">Hand-crafted, limited edition drinks with unique flavors and beautiful packaging.</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inspired by Icepop</h3>
              <p className="text-gray-600">Our mascot's playful, adventurous spirit is infused into every bottle and every gathering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Waddle and Sip</h2>
              <p className="text-lg text-gray-600 mb-6">
                Waddle and Sip is a designer zero proof brand, dedicated to creating hand-crafted, alcohol-free beverages that are as stylish as they are delicious. Our mission is to bring people together for fun, friendship, and unforgettable moments—no alcohol required.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Inspired by our mascot Icepop, we believe in living life to the fullest, embracing adventure, and always chilling responsibly.
              </p>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">Zero</div>
                  <div className="text-gray-600">Proof</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                  <div className="text-gray-600">Taste</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">Limited</div>
                  <div className="text-gray-600">Edition</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">Hand</div>
                  <div className="text-gray-600">Crafted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            Want to learn more or carry Waddle and Sip? Reach out and let's connect!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <span className="w-6 h-6 text-indigo-600 mr-3">📧</span>
                  <span className="text-gray-600">hello@waddleandsip.com</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 text-indigo-600 mr-3">📞</span>
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 text-indigo-600 mr-3">📍</span>
                  <span className="text-gray-600">123 Innovation St, Tech City, TC 12345</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">Waddle and Sip</h3>
              <p className="text-gray-400">
                Designer zero proof. Hand crafted. Inspired by Icepop.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#icepop" className="hover:text-white transition-colors">Meet Icepop</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Signature Drink</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Icepop's Iced Espresso Hartini</li>
                <li>Zero Proof</li>
                <li>Limited Edition</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">🐧</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">❄️</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">🎨</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Waddle and Sip. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
