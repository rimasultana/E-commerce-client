const Contact = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center px-4 py-16">
        <div className="card w-full max-w-3xl shadow-xl bg-white p-8 rounded-2xl">
          <h2 className="text-4xl font-bold text-center text-purple-700 mb-6">
            Get in Touch
          </h2>
          <p className="text-center text-gray-500 mb-10">
            We'd love to hear from you! Send us a message and we'll respond as
            soon as possible.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-medium">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-medium">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="5"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center mt-4">
              <button className="btn bg-purple-600 text-white hover:bg-purple-700 px-10">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
