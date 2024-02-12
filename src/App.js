import { Nav, Aboutus, Location, Footer, Service } from "./components";
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
        <section>
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
