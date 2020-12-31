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
    exit="pageExit"
    variants={{
      pageInitial: {
        opacity: 0,
      },
      pageAnimate: {
        opacity: 1,
      },
      pageExit: {
        opacity: 0,
      },
    }}
  >
    {children}
  </Container>
);

export default OpacityTransition;
