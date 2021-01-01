import { FC, forwardRef } from "react";

import { Container } from "@styles/components/CustomIconButton";
import { Tooltip } from "@material-ui/core";

interface CustomIconButtonProps {
  title?: string;
  color: string;
  onClick?: () => void;
}

const CustomIconButton: FC<CustomIconButtonProps> = forwardRef(
  ({ title, color, children, onClick }, ref) => {
    return (
      <Tooltip title={title || ""} ref={ref} open={!title ? false : undefined}>
        <Container color={color} disabled={!onClick} onClick={onClick}>
          {children}
        </Container>
      </Tooltip>
    );
  }
);

export default CustomIconButton;
