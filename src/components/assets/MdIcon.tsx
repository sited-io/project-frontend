import "@material/web/icon/icon";

import { ComponentProps, splitProps } from "solid-js";

type Props = ComponentProps<"i"> & {
  readonly icon: string;
  readonly slot?: string | undefined;
};

export function MdIcon(props: Props) {
  const [local, others] = splitProps(props, ["icon"]);

  return (
    <md-icon
      class="color-gray-900 fill-gray-900 dark:color-gray-900 dark:fill-slate-50"
      {...others}
    >
      {local.icon}
    </md-icon>
  );
}

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "md-icon": Omit<Props, "icon">;
    }
  }
}
