import { CircularProgress } from "@material-ui/core";
import { Container } from "@styles/pages/menus";
import { CategoryList } from "@styles/theme";
import { useRouter } from "next/dist/client/router";
import { FC, useEffect } from "react";

const Index: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/menus/${CategoryList[0][3]}`);
  }, [router]);

  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default Index;
