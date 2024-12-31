'use client';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative min-h-[600px] mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/india/home/banner.png"
          alt="Premium Indian Visa Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 mb-8">
            <span className="w-12 h-px bg-amber-400/50"></span>
            <span className="text-amber-400/90 text-sm tracking-[0.2em] uppercase">
              Premium Service
            </span>
            <span className="w-12 h-px bg-amber-400/50"></span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight tracking-wide">
            Exclusive Indian Visa <br />
            <span className="text-amber-400">Processing Service</span>
          </h1>

          <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl tracking-wide">
            Experience unparalleled excellence in visa processing with our
            premium services. We ensure a sophisticated and seamless journey for
            your Indian visa requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Link
              href="/visa/step-one"
              className="group inline-flex items-center justify-center"
            >
              <span className="relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider">
                <span className="absolute inset-0 w-full h-full bg-amber-400 rounded transform transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded border-2 border-amber-400 transform transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"></span>
                <span className="relative text-amber-900 font-medium">
                  Begin Application
                </span>
              </span>
            </Link>
            <Link
              href="/track-application"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white border border-amber-400/30 hover:bg-amber-400/10 transition-colors duration-300 tracking-wider"
            >
              Track Application Status
            </Link>
          </div>

          {/* Luxury Trust Indicators */}
          <div className="grid grid-cols-3 gap-12 pt-12 border-t border-amber-400/20">
            <div>
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-400/10 border border-amber-400/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-400"
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
                </div>
                <div className="text-2xl font-light text-white">24/7</div>
              </div>
              <p className="text-sm text-gray-400 tracking-wide">
                Premium Processing Service
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-400/10 border border-amber-400/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-400"
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
                </div>
                <div className="text-2xl font-light text-white">Secure</div>
              </div>
              <p className="text-sm text-gray-400 tracking-wide">
                Advanced Protection
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-400/10 border border-amber-400/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-400"
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
                </div>
                <div className="text-2xl font-light text-white">Swift</div>
              </div>
              <p className="text-sm text-gray-400 tracking-wide">
                Priority Processing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent"></div>
      <div className="absolute bottom-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent"></div>
    </div>
  );
};

export default Banner;
