import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";

type PortalProps = PropsWithChildren<{
  targetId: string;
}>;

const Portal = (props: PortalProps) => {
  const { children, targetId } = props;

  const targetEl = document.getElementById(targetId);

  if (!targetEl) return null;

  return createPortal(children, targetEl);
};

export default Portal;
