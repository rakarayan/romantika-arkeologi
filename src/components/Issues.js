function Issues() {
    const issues = [
        { id: 1, title: "Vol. 1 No. 1 (November 2025)", description: "Edisi perdana, tema: Arkeologi Nusantara", pdf: "/articles/vol1no1.pdf" }
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-yellow-600 mb-4">Edisi Jurnal</h2>
                <p className="text-lg text-gray-700 mb-6">Berikut adalah daftar edisi Jurnal Romantika Arkeologi:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {issues.map(issue => (
                        <div key={issue.id} className="border p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-900">{issue.title}</h3>
                            <p className="text-gray-600">{issue.description}</p>
                            <a href={issue.pdf} className="mt-2 inline-block bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Unduh PDF</a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
