declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const svg: FC<SVGProps<SVGElement>>;
  export default svg;
}
