import data from "@data/en.json";

const Home = () => {
  const dataByLang = data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {dataByLang.test}
      </div>
    </main>
  );
};

export default Home;
