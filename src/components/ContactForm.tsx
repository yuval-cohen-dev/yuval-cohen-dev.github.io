import { FORM_ID } from "@/lib/constants";
import Link from "next/link";

export default function ContactForm({
  title,
  description,
  
}: {
  title: string;
  description: string;
}) {
  const action =  `https://formspree.io/f/${FORM_ID}`;
  return (
    <section
      id="contact"
      className="py-20 px-8 bg-gray-900"
    >
      <h2 className="text-3xl font-extrabold mb-6 text-center text-white">
        {title}
      </h2>
      <p className="text-lg max-w-3xl mx-auto text-center mb-8 text-gray-300">
        {description}
      </p>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <form
          action={action}
          method="POST"
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-white text-lg"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-white text-lg"
            >
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-white text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="inline-flex items-center text-white">
              <input
                type="checkbox"
                required
                className="form-checkbox text-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">
                Sign up for our email list for updates, promotions, and more.
              </span>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            This site is protected by reCAPTCHA and the Google{" "}
            <Link
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Terms of Service
            </Link>{" "}
            apply.
          </p>
        </div>
      </div>
    </section>
  );
}
