import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NavHeading from "../components/navHeading/navHeading";
import './(frontend)/globals.css'

export default function NotFound() {
    return (
        <>
            <NavHeading />
            <Header />

            <div className="flex min-h-[70vh] items-center justify-center px-6">
                <div className="text-center max-w-lg">

                    <h1 className="text-[120px] font-extrabold text-black leading-none">
                        404
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
                        Page Not Found
                    </h2>

                    <p className="text-gray-500 mt-4 text-base md:text-lg">
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>

                    <a
                        href="/"
                        className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition duration-300"
                    >
                        Go Back Home
                    </a>

                </div>
            </div>

            <Footer />
        </>
    );
}