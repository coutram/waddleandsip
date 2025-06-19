import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ice to-white pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title mb-6">Complete Brand Development Services</h1>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            From concept to shelf, we handle every aspect of your beverage brand journey. No detail is too small when it comes to bringing your vision to life.
          </p>
        </div>

        {/* Hero Section */}
        <div className="card bg-gradient-to-r from-brand-blue to-brand-indigo text-white mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Your Vision, Our Expertise</h2>
              <p className="text-lg mb-6 opacity-90">
                We've mastered the art of creating successful beverage brands with memorable mascots. Now we're sharing our complete process to help you build your own empire.
              </p>
              <p className="text-lg mb-8 opacity-90">
                Whether you're dreaming of a zero-proof revolution or crafting the next big alcoholic sensation, our end-to-end service ensures nothing stands in your way.
              </p>
              <Link to="/brand-consultation" className="btn-primary bg-white text-brand-blue hover:bg-gray-100">
                Start Your Project
              </Link>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto relative">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                <img
                  src="/icepop.png"
                  alt="Icepop the Penguin"
                  className="w-full h-full object-contain relative z-10 animate-float"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="card text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Brand Identity</h3>
            <p className="text-gray-600 font-body">
              Complete mascot design, logo creation, and visual identity system
            </p>
          </div>
          <div className="card text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform">
              <span className="text-2xl">🍹</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Flavor Development</h3>
            <p className="text-gray-600 font-body">
              Expert recipe formulation and flavor profile creation
            </p>
          </div>
          <div className="card text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform">
              <span className="text-2xl">🏭</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Bottling & Production</h3>
            <p className="text-gray-600 font-body">
              Complete manufacturing and packaging solutions
            </p>
          </div>
          <div className="card text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Sales & Distribution</h3>
            <p className="text-gray-600 font-body">
              E-commerce platform and distribution network setup
            </p>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="space-y-16">
          {/* Brand Identity Section */}
          <section>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Brand Identity & Mascot Development</h2>
                <p className="text-lg text-gray-600 font-body mb-6">
                  Your mascot is the heart of your brand. We create memorable characters that connect with your audience and drive brand recognition.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Mascot Design & Personality</h4>
                      <p className="text-gray-600 font-body">Complete character development including backstory, personality traits, and visual design</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Logo & Visual Identity</h4>
                      <p className="text-gray-600 font-body">Professional logo design, color palette, typography, and brand guidelines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Brand Voice & Messaging</h4>
                      <p className="text-gray-600 font-body">Complete brand voice development, taglines, and marketing copy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Packaging Design</h4>
                      <p className="text-gray-600 font-body">Eye-catching label design that showcases your mascot and brand story</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full opacity-20 animate-pulse"></div>
                    <img
                      src="/icepop.png"
                      alt="Icepop the Penguin"
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-blue mb-4">Meet Icepop</h3>
                  <p className="text-gray-700 font-body">
                    Our beloved mascot who inspired the Waddle and Sip brand. Every great brand needs a character that customers can connect with.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Flavor Development Section */}
          <section>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl">🍹</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-green-700 mb-4">Flavor Innovation</h3>
                    <p className="text-gray-700 font-body">
                      From concept to final recipe, we craft flavors that delight and differentiate your brand in the market.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Flavor Development & Recipe Formulation</h2>
                <p className="text-lg text-gray-600 font-body mb-6">
                  Our expert flavorists work with you to create unique, delicious beverages that stand out in the competitive market.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Custom Recipe Development</h4>
                      <p className="text-gray-600 font-body">Tailored flavor profiles based on your brand vision and target market</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Ingredient Sourcing</h4>
                      <p className="text-gray-600 font-body">Premium, sustainable ingredients from trusted suppliers worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Quality Testing</h4>
                      <p className="text-gray-600 font-body">Rigorous testing for taste, consistency, and shelf stability</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Regulatory Compliance</h4>
                      <p className="text-gray-600 font-body">Ensure all formulations meet FDA and industry standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottling & Production Section */}
          <section>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Bottling & Production Management</h2>
                <p className="text-lg text-gray-600 font-body mb-6">
                  We handle every aspect of production, from sourcing the perfect bottles to ensuring consistent quality in every batch.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Manufacturing Coordination</h4>
                      <p className="text-gray-600 font-body">Partner with premium co-packers and contract manufacturers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Packaging Solutions</h4>
                      <p className="text-gray-600 font-body">Custom bottle design, labeling, and secondary packaging</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Quality Control</h4>
                      <p className="text-gray-600 font-body">Comprehensive quality assurance and batch testing protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Inventory Management</h4>
                      <p className="text-gray-600 font-body">Efficient production scheduling and inventory tracking</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🏭</span>
                    </div>
                  <h3 className="text-xl font-heading font-bold text-orange-700 mb-4">Production Excellence</h3>
                  <p className="text-gray-700 font-body">
                    State-of-the-art facilities and processes ensure your product meets the highest quality standards every time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sales & Distribution Section */}
          <section>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-purple-700 mb-4">Go-to-Market Strategy</h3>
                    <p className="text-gray-700 font-body">
                      Complete sales and distribution setup to get your product in front of customers and driving revenue.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Sales Site & Distribution Network</h2>
                <p className="text-lg text-gray-600 font-body mb-6">
                  We build your complete sales infrastructure, from a professional e-commerce platform to a robust distribution network.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">E-commerce Platform</h4>
                      <p className="text-gray-600 font-body">Professional online store with payment processing and order management</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Retail Distribution</h4>
                      <p className="text-gray-600 font-body">Secure placement in grocery stores, liquor stores, and specialty shops</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">On-Premise Sales</h4>
                      <p className="text-gray-600 font-body">Bar and restaurant partnerships for maximum visibility</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900">Marketing Support</h4>
                      <p className="text-gray-600 font-body">Digital marketing, social media, and promotional campaigns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study Section */}
          <section className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Success Story: Teka Ram Tequila</h2>
              <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
                See how we transformed a vision into a premium artisanal tequila brand with a distinctive character and cultural authenticity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/case-study.jpeg"
                    alt="Teka Ram Tequila Bottle"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg">
                  <div className="bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full p-2">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">The Challenge</h3>
                    <p className="text-gray-600 font-body">
                      Create a premium tequila brand that celebrates Mexican culture while standing out in the competitive spirits market with an unforgettable mascot and identity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">Our Approach</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-gray-900">Character Development</h4>
                          <p className="text-gray-600 font-body">Created Teka Ram, a charismatic mascot embodying strength and tradition</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-gray-900">Authentic Design</h4>
                          <p className="text-gray-600 font-body">Developed a label featuring traditional agave motifs and modern artistry</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-gray-900">Premium Positioning</h4>
                          <p className="text-gray-600 font-body">Crafted a brand story emphasizing artisanal quality and cultural heritage</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">The Results</h3>
                    <p className="text-gray-600 font-body mb-4">
                      Teka Ram Tequila launched successfully with widespread recognition for its distinctive branding and authentic character. The brand achieved:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-brand-blue mb-1">85%</div>
                        <div className="text-sm text-gray-600">Brand Recognition</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-brand-blue mb-1">2X</div>
                        <div className="text-sm text-gray-600">Market Growth</div>
                      </div>
                    </div>
                  </div>

                  <Link to="/brand-consultation" className="btn-primary inline-block">
                    Start Your Success Story
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Process Timeline */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
              From initial concept to successful launch, we guide you through every step of your beverage brand journey.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600 font-body">
                We dive deep into your vision, target market, and goals to create a comprehensive brand strategy.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600 font-body">
                Our team creates your mascot, develops flavors, and designs packaging that brings your vision to life.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Production</h3>
              <p className="text-gray-600 font-body">
                We coordinate manufacturing, quality control, and packaging to ensure your product meets the highest standards.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600 font-body">
                We build your sales platform, secure distribution, and execute marketing campaigns for a successful launch.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Levels */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Investment Levels</h2>
            <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
              Choose the package that best fits your vision and budget. All packages include our complete expertise and support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-heading font-bold text-brand-blue mb-4">$25K - $50K</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Basic mascot design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Single flavor development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Basic packaging design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Small batch production</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">E-commerce setup</span>
                </li>
              </ul>
              <Link to="/brand-consultation" className="btn-secondary w-full">
                Get Started
              </Link>
            </div>
            <div className="card text-center border-2 border-brand-blue relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Professional</h3>
              <div className="text-3xl font-heading font-bold text-brand-blue mb-4">$50K - $100K</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Complete mascot development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Multiple flavor profiles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Premium packaging design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Medium-scale production</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Full e-commerce platform</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Retail distribution setup</span>
                </li>
              </ul>
              <Link to="/brand-consultation" className="btn-primary w-full">
                Get Started
              </Link>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-heading font-bold text-brand-blue mb-4">$100K+</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Full brand ecosystem</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Complete product line</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Custom packaging solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Large-scale production</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Multi-channel distribution</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 font-body">Ongoing marketing support</span>
                </li>
              </ul>
              <Link to="/brand-consultation" className="btn-secondary w-full">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20">
          <div className="card bg-gradient-to-r from-brand-blue to-brand-indigo text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Ready to Create Your Beverage Empire?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the ranks of successful beverage brands that started with a vision and a memorable mascot. Let's bring your dream to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/brand-consultation" className="btn-primary bg-white text-brand-blue hover:bg-gray-100">
                Start Your Project
              </Link>
              <Link to="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-brand-blue">
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services 