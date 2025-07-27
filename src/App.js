const { BrowserRouter, Routes, Route } = ReactRouterDOM;

function App() {
    return (
        <BrowserRouter basename="/romantika-arkeologi">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/editorial" element={<Editorial />} />
                <Route path="/issues" element={<Issues />} />
                <Route path="/submission" element={<Submission />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
