export default function Hero() {
    return (
        <section className="bg-white lg:grid  lg:place-content-center">
            <div className="mx-auto w-screen max-w-screen-xl  mt-10">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Upload & Download <span className="text-indigo-600">Images</span> Easily
                    </h1>

                    <p className="mt-4 text-base text-gray-700 sm:text-lg">
                        A simple platform where you can upload your images and let others download them instantly.
                    </p>

                    {/* Searchbar */}
                    <div className="mt-6 flex w-full max-w-lg mx-auto rounded-lg border border-gray-300 shadow-sm overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search images..."
                            className="w-full px-4 py-3 text-gray-700 focus:outline-none"
                        />
                        <button className="bg-indigo-600 px-5 text-white font-medium hover:bg-indigo-700 transition">
                            Search
                        </button>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-8 flex justify-center gap-4">
                        <a
                            href="#"
                            className="rounded-lg border border-indigo-600 bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                        >
                            Upload Image
                        </a>

                        <a
                            href="#"
                            className="rounded-lg border border-gray-200 px-6 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
                        >
                            Browse Gallery
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
