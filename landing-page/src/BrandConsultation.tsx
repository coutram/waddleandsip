import React, { useState } from 'react'

function BrandConsultation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectName: '',
    beverageType: '',
    budget: '',
    timeline: '',
    brandVision: '',
    additionalInfo: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null })

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null })
    } catch {
      setFormStatus({ isSubmitting: false, isSubmitted: false, error: 'Something went wrong. Please try again.' })
    }
  }

  if (formStatus.isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-ice to-white pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card max-w-lg mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h2 className="text-2xl font-heading font-bold text-green-600 mb-2">Application Submitted!</h2>
            <p className="text-gray-600 font-body">
              Thank you for your interest! We'll contact you within 2-3 business days.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ice to-white pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">Brand Consultation</h1>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
            Ready to create your own beverage brand? Let's bring your vision to life!
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Project Details</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Name *</label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    placeholder="e.g., Arctic Ales, Penguin's Potion"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Beverage Type *</label>
                    <select
                      name="beverageType"
                      value={formData.beverageType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    >
                      <option value="">Select beverage type</option>
                      <option value="zero-proof-mocktails">Zero-Proof Mocktails</option>
                      <option value="sparkling-beverages">Sparkling Beverages</option>
                      <option value="craft-cocktails">Craft Cocktails (Alcoholic)</option>
                      <option value="specialty-beers">Specialty Beers</option>
                      <option value="wine-varietals">Wine Varietals</option>
                      <option value="craft-spirits">Craft Spirits</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-25k">Under $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="over-250k">Over $250,000</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline *</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                  >
                    <option value="">Select timeline</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="1-2-years">1-2 years</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Brand Vision</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Brand Vision & Story *</label>
                  <textarea
                    name="brandVision"
                    value={formData.brandVision}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    placeholder="Describe your brand vision, values, and the story you want to tell..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-body"
                    placeholder="Any other details about your project, specific requirements, or questions..."
                  />
                </div>
              </div>
            )}

            {formStatus.error && (
              <div className="text-red-600 text-sm font-body bg-red-50 p-3 rounded-lg mt-6">
                {formStatus.error}
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-body transition-all ${
                  currentStep === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>

              {currentStep < 3 ? (
                <button type="button" onClick={nextStep} className="btn-primary">
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`px-8 py-3 rounded-full text-lg font-bold font-heading transition-all duration-200 ${
                    formStatus.isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'btn-primary'
                  }`}
                >
                  {formStatus.isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BrandConsultation 