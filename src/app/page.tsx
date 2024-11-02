import data from "@data/l10n/en";
import { withLayout } from "./_components/LayoutWrapper";

const Home = () => {
  const dataByLang = data;
  //NOTE: redirect to the /en by default?

  return <div>{dataByLang.about.test}</div>;
};

export default withLayout(Home);
