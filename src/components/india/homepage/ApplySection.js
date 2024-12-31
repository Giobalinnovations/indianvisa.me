import Image from 'next/image';
import Link from 'next/link';

const ApplySection = () => {
  const premiumServices = [
    {
      title: 'Premium Tourist Visa',
      description:
        'Exclusive visa service for discerning travelers. Experience personalized assistance and priority processing for your leisure travel requirements.',
      features: ['VIP Processing', 'Concierge Support', 'Priority Handling'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Elite Business Visa',
      description:
        'Premium service for business executives. Enjoy dedicated support and expedited processing for your business travel needs.',
      features: [
        'Executive Processing',
        'Business Lounge Access',
        'Priority Service',
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Luxury Medical Visa',
      description:
        'Exclusive medical travel arrangements. Benefit from personalized coordination with premium healthcare providers and luxury accommodations.',
      features: ['Medical Liaison', 'Premium Care', 'Luxury Transport'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: 'VIP Conference Visa',
      description:
        'Distinguished service for event attendees. Experience premium handling of conference and event-related visa requirements.',
      features: ['VIP Documentation', 'Event Coordination', 'Luxury Services'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
  ];

  const exclusiveProcess = [
    {
      title: 'Personal Consultation',
      description:
        'Private consultation with our elite visa specialists to understand your requirements and provide tailored solutions.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Premium Processing',
      description:
        'Swift and meticulous handling of your application with our exclusive premium processing service.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'VIP Documentation',
      description:
        'Exclusive handling of your documentation with personalized attention to every detail.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Elite Concierge',
      description:
        'Dedicated concierge service to assist you throughout your visa application journey.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Premium Services Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-1 mb-8">
            <span className="px-4 py-1 text-sm font-medium text-amber-900 bg-gradient-to-r from-amber-100 to-amber-50 rounded-full border border-amber-200">
              Premium Visa Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
            Exclusive <span className="text-amber-700">Visa Solutions</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto font-light">
            Experience unparalleled visa services tailored for discerning
            clients. Our elite team ensures a seamless and luxurious visa
            application process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {premiumServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-sm transition-all duration-500 hover:shadow-xl border border-amber-100/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.02] to-amber-700/[0.02] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-amber-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/visa/step-one"
                  className="mt-8 inline-flex items-center text-amber-700 text-sm hover:text-amber-800 transition-colors duration-300 group-hover:translate-x-1"
                >
                  Begin Application
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exclusive Process Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
            Exclusive <span className="text-amber-700">Process</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto font-light">
            Experience our premium visa application process, designed for
            excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exclusiveProcess.map((step, index) => (
            <div key={index} className="relative group">
              <div className="relative p-8 bg-white rounded-xl shadow-sm border border-amber-100/50">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 mb-6">
                  {step.icon}
                </div>
                <div className="absolute top-8 right-8 font-serif text-amber-200 text-2xl">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
              {index < exclusiveProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-amber-200 to-transparent transform -translate-y-1/2 -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/visa/step-one"
            className="group inline-flex items-center justify-center"
          >
            <span className="relative inline-flex items-center justify-center px-8 py-4 font-light text-white transition-all duration-300 transform hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-700 to-amber-600 rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center text-lg">
                Begin Premium Application
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
