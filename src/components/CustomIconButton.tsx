import { FC } from "react";

import { Container } from "@styles/components/CustomIconButton";
import { Tooltip } from "@material-ui/core";

interface CustomIconButtonProps {
  title: string;
  color: string;
  onClick?: () => void;
}

const CustomIconButton: FC<CustomIconButtonProps> = ({
  title,
  color,
  children,
  onClick,
}) => {
  return (
    <Tooltip title={title}>
      <Container color={color} disabled={!onClick} onClick={onClick}>
        {children}
      </Container>
    </Tooltip>
  );
};

export default CustomIconButton;
