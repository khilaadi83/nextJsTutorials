    export default function ContactUs() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <div className="max-w-lg">
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input type="email" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block mb-1">Message</label>
                <textarea className="w-full border p-2 rounded h-32"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Send Message
              </button>
            </form>
          </div>
        </div>
      );
    }
