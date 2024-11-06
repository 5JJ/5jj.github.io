import data from "@constants/l10n/en";

const Home = () => {
  const dataByLang = data;
  //NOTE: redirect to the /en by default?

  return <div>{dataByLang.about.test}</div>;
};

export default Home;
