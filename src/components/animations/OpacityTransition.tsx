import { FC } from "react";

import { Container } from "@styles/components/animations/OpacityTransition";

interface OpacityTransitionProps {
  route: string;
}

const OpacityTransition: FC<OpacityTransitionProps> = ({ route, children }) => (
  <Container
    key={route}
    initial="pageInitial"
    animate="pageAnimate"
    variants={{
      pageInitial: {
        opacity: 0,
      },
      pageAnimate: {
        opacity: 1,
      },
    }}
  >
    {children}
  </Container>
);

export default OpacityTransition;
