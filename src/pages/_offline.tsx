import { FULL_NAME, ABOUT_TITLE, ABOUT_TEXT, FOOTER_TEXT } from "@constants";
import Link from "next/link";

const Fallback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-3xl font-bold">{FULL_NAME} Portfolio</h1>
      <h2 className="text-xl text-gray-600 mt-2">You Are Offline</h2>
      <p className="text-gray-500 mt-4 max-w-md">
        {"It looks like you've lost your internet connection. Please check your network and try again."}
      </p>
      <div className="mt-6 p-4 bg-white shadow rounded-lg max-w-lg text-left">
        <h3 className="text-2xl font-semibold">{ABOUT_TITLE}</h3>
        <p className="text-gray-700 mt-2">{ABOUT_TEXT}</p>
      </div>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Retry
      </Link>
      <footer className="mt-10 text-sm text-gray-400">
        {FOOTER_TEXT}
      </footer>
    </div>
  );
};

export default Fallback;
