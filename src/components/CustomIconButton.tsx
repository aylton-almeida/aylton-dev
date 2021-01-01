import { FC, ForwardedRef, forwardRef } from "react";

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
    const IconButton = (ref: ForwardedRef<unknown>) => (
      <Container
        color={color}
        disabled={!onClick}
        onClick={onClick}
        ref={ref as any}
      >
        {children}
        {showLabel && (
          <Typography variant="button" className="title">
            {title}
          </Typography>
        )}
      </Container>
    );

    return hideTooltip ? (
      IconButton(ref)
    ) : (
      <Tooltip title={title || ""}>{IconButton(ref)}</Tooltip>
    );
  }
);

export default CustomIconButton;
