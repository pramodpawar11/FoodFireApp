import { Nav, Aboutus, Location, Footer, Service,Hero } from "./components";
function App() {
  return (
    <>
      <main>
        <Nav />
        <section>
          <Location />
        </section>
        <section>
          <Service />
        </section>
        <section className="padding-x padding-y">
          <Hero/>
        </section>
        <section className="padding-x padding-y bg-slate-100">
          <Aboutus />
        </section>
        <section>
          <Footer />
        </section>
      </main>

    </>
  );
}

export default App;
