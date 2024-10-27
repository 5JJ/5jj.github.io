import data from "../../data";

type PageProps = {
  params: {
    lang: "kr";
  };
};

export async function generateStaticParams() {
  return [
    {
      lang: "kr",
    },
  ];
}

const Home = (props: PageProps) => {
  const { params } = props;

  const dataByLang = !params.lang ? data.en : data[params.lang];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {params.lang}
        {dataByLang.test}
      </div>
    </main>
  );
};

export default Home;
