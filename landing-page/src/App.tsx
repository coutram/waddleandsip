import React, { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<{
    isSubmitting: boolean
    isSubmitted: boolean
    error: string | null
  }>({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Please fill in all fields'
      })
      return
    }

    if (!formData.email.includes('@')) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Please enter a valid email address'
      })
      return
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    })

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For demo purposes, we'll just simulate success
      // In a real app, you would send this to your backend:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSubmitted: false
        }))
      }, 5000)

    } catch {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Something went wrong. Please try again.'
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ice to-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-heading font-bold bg-gradient-to-r from-brand-blue to-brand-indigo bg-clip-text text-transparent">
                  Waddle and Sip
                </h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="font-body text-gray-700 hover:text-brand-blue transition-colors">Home</a>
              <a href="#icepop" className="font-body text-gray-700 hover:text-brand-blue transition-colors">Meet Icepop</a>
              <a href="#features" className="font-body text-gray-700 hover:text-brand-blue transition-colors">Features</a>
              <a href="#about" className="font-body text-gray-700 hover:text-brand-blue transition-colors">About</a>
              <a href="#contact" className="font-body text-gray-700 hover:text-brand-blue transition-colors">Contact</a>
              <button className="btn-primary">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Snowflake Background */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-20">
          <div className="absolute w-full h-full animate-float">
            <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="snow" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M25,0 L30,20 L40,25 L30,30 L25,50 L20,30 L10,25 L20,20 Z" fill="#c7d2fe" opacity="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#snow)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center md:text-left">
              <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-indigo">
                  Chill Responsibly
                </span>
                <br />
                <span className="text-blue-400">with Icepop</span>
              </h1>
              <p className="text-xl font-body text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
                Designer zero proof drinks for every adventure. Hand-crafted, full of flavor, and always fun—just like our mascot!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="btn-primary">
                  Shop Now
                </button>
                <button className="btn-secondary">
                  Meet Icepop
                </button>
              </div>
            </div>

            {/* Right: Product Display */}
            <div className="relative">
              <div className="relative w-full aspect-square">
                <img
                  src="/bottle.jpeg"
                  alt="Waddle and Sip Bottle"
                  className="absolute inset-0 w-full h-full object-contain rounded-3xl transform rotate-12 animate-float"
                />
                <div className="absolute -bottom-8 right-0 w-32 h-32">
                  <img
                    src="/icepop.png"
                    alt="Icepop the Penguin"
                    className="w-full h-full object-contain animate-bounce-slow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose Waddle and Sip?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Designer zero-proof beverages, crafted for those who crave adventure, flavor, and fun—without compromise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "❄️",
                title: "Zero Proof, Full Flavor",
                description: "Enjoy the taste and experience of a crafted cocktail—without the alcohol."
              },
              {
                icon: "🎨",
                title: "Designer Quality",
                description: "Hand-crafted, limited edition drinks with unique flavors and beautiful packaging."
              },
              {
                icon: "🐧",
                title: "Inspired by Icepop",
                description: "Our mascot's playful, adventurous spirit is infused into every bottle and every gathering."
              }
            ].map((feature, index) => (
              <div key={index} className="card group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Icepop Section */}
      <section id="icepop" className="py-20 bg-gradient-to-r from-brand-ice to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-12">
            <div className="w-48 h-48 mx-auto relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full opacity-20 animate-pulse"></div>
              <img
                src="/icepop.png"
                alt="Icepop the Penguin"
                className="w-full h-full object-contain relative z-10 animate-float"
              />
            </div>
            <h2 className="section-title mb-6">Meet Icepop</h2>
            <p className="text-lg text-gray-700 font-body max-w-2xl mx-auto leading-relaxed">
              Born in the frosty landscapes of Antarctica, Icepop is our adventurous mascot who loves nothing more than bringing joy to everyone around him. With his signature blue cap and warm smile, he's the perfect companion for all your zero-proof adventures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-heading font-bold text-brand-blue mb-4">Personality</h3>
              <p className="text-gray-600 font-body">
                Playful, adventurous, and always ready for fun. Icepop loves hide and seek, sliding down icy slopes, and making new friends wherever he goes.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-heading font-bold text-brand-blue mb-4">Favorites</h3>
              <p className="text-gray-600 font-body">
                Hot cocoa on cold days, cozy blankets by the fire, and of course, Waddle and Sip's signature drinks!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-12 font-body">
            Have questions about our products or want to collaborate? We'd love to hear from you!
          </p>
          <div className="card max-w-lg mx-auto">
            {formStatus.isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-green-600 mb-2">Message Sent!</h3>
                <p className="text-gray-600 font-body">
                  Thank you for reaching out! We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    disabled={formStatus.isSubmitting}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    disabled={formStatus.isSubmitting}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    disabled={formStatus.isSubmitting}
                  ></textarea>
                </div>
                
                {formStatus.error && (
                  <div className="text-red-600 text-sm font-body bg-red-50 p-3 rounded-lg">
                    {formStatus.error}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className={`w-full px-8 py-3 rounded-full text-lg font-bold font-heading transition-all duration-200 ${
                    formStatus.isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'btn-primary'
                  }`}
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-heading font-bold text-2xl text-brand-blue mb-4">Waddle and Sip</h3>
          <p className="text-gray-600 font-body mb-6">Chill Responsibly™</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
