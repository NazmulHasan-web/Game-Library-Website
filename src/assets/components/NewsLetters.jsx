import React from 'react';

const NewsLetters = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-6 text-white">
  <div className="max-w-4xl mx-auto text-center">
    {/* <!-- Heading --> */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Subscribe to Our Newsletter
    </h2>
    <p className="text-lg text-blue-100 mb-8">
      Get the latest gaming updates, news, and exclusive offers delivered straight to your inbox.
    </p>

    {/* <!-- Form --> */}
    <form
      action="#"
      className="flex flex-col sm:flex-row items-center justify-center gap-3"
    >
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full sm:w-2/3 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-400"
        required
      />
      <button
        type="submit"
        className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all"
      >
        Subscribe
      </button>
    </form>

    {/* <!-- Footer note --> */}
    <p className="text-sm text-blue-200 mt-6">
      We respect your privacy. Unsubscribe anytime.
    </p>
  </div>
</section>

    );
};

export default NewsLetters;