import { PropsWithChildren, useEffect, useRef, useState } from "react";
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

export const StackingPortal = (props: PortalProps) => {
  const { children, targetId } = props;

  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const targetEl = document.getElementById(targetId);

  if (!targetEl) return null;

  useEffect(() => {
    const newDiv = document.createElement("div");
    targetEl.appendChild(newDiv);
    setContainer(newDiv);

    return () => {
      targetEl.removeChild(newDiv);
    };
  }, []);

  if (!container) return null;

  return createPortal(children, container);
};

export default Portal;
