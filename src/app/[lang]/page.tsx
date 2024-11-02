import data from "../../data/l10n";
import { PageProps } from "./types";

const Home = (props: PageProps) => {
  const { params } = props;

  const dataByLang = data[params.lang].about;

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
