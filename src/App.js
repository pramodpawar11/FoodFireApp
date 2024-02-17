import { Nav, Aboutus, Location, Footer, Service,Hero } from "./components";
function App() {
  return (
    <>
      <main>
        <section className="h-10">
        <Nav />
        </section>
        <section className="">
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
        <section className="padding-x bg-black padding-t pb-8">
          <Footer  />
        </section>
      </main>

    </>
  );
}

export default App;
