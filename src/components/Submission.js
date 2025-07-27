function Submission() {
    return (
        <div className="container mx-auto py-8 px-4">
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-yellow-600 mb-4">Pengiriman Artikel</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Kami menerima artikel ilmiah dari mahasiswa sarjana di seluruh Indonesia yang relevan dengan ilmu arkeologi atau disiplin terkait. Silakan kirim artikel Anda melalui formulir berikut atau email ke <a href="mailto:jurnal.romantika@kama.ui.ac.id" className="text-blue-600 hover:underline">jurnal.romantika@kama.ui.ac.id</a>.
                </p>
                <a href="https://forms.gle/xyz" target="_blank" className="mb-4 inline-block bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600">Isi Formulir Pengiriman</a>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Panduan Pengiriman</h3>
                <ul className="list-disc pl-6 text-lg text-gray-700">
                    <li>Artikel ditulis dalam bahasa Indonesia atau Inggris.</li>
                    <li>Format: Microsoft Word (.docx), maksimal 5.000 kata.</li>
                    <li>Sertakan abstrak (150–200 kata) dan kata kunci.</li>
                    <li>Gaya penulisan: APA 7th Edition.</li>
                    <li>Kirimkan bersama surat pernyataan orisinalitas.</li>
                </ul>
            </section>
        </div>
    );
}
