import { Main } from "@app";
import { Layout } from "@app";

const Index = () => <Main />;

Index.getLayout = function getLayout(page) {
  return <Layout title="Main Page">{page}</Layout>;
};

export default Index;
