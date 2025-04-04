import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <strong className="text-indigo-600"> AI-Cademy </strong>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Unlock personalized learning experiences with our AI-powered study helper. Boost your study efficiency and achieve academic success like never before.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <button
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                onClick={() => navigate('/auth')}
              >
                Get Started
              </button>

              <button
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                onClick={() => navigate('/learn-more')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
