function Home() {
    return (
        <div className="container mx-auto py-8 px-4">
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-yellow-600 mb-4">Selamat Datang</h2>
                <p className="text-lg text-gray-700">
                    Jurnal Romantika Arkeologi merupakan wadah bagi mahasiswa program sarjana di seluruh Indonesia untuk mempublikasikan artikel ilmiah tentang ilmu arkeologi atau ilmu lainnya yang memiliki keterkaitan. Jurnal ini bertujuan memberikan manfaat bagi pembaca dengan menyediakan informasi yang dapat menambah wawasan dan pengetahuan tentang dunia arkeologi.
                </p>
                <a href="/submission" className="mt-4 inline-block bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600">Kirim Artikel</a>
            </section>
        </div>
    );
}
