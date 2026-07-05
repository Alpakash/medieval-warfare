/// <reference types="vite/client" />

declare module "*.svg?react" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}
