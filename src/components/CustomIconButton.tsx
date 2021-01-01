import { FC, forwardRef } from "react";

import { Container } from "@styles/components/CustomIconButton";
import { Tooltip, Typography } from "@material-ui/core";

interface CustomIconButtonProps {
  title?: string;
  color: string;
  showLabel?: boolean;
  hideTooltip?: boolean;
  onClick?: () => void;
}

const CustomIconButton: FC<CustomIconButtonProps> = forwardRef(
  ({ title, color, showLabel, hideTooltip, children, onClick }, ref) => {
    return (
      <Tooltip
        title={title || ""}
        ref={ref}
        open={hideTooltip || !title ? false : undefined}
      >
        <Container color={color} disabled={!onClick} onClick={onClick}>
          {children}
          {showLabel && (
            <Typography variant="button" className="title">
              {title}
            </Typography>
          )}
        </Container>
      </Tooltip>
    );
  }
);

export default CustomIconButton;
