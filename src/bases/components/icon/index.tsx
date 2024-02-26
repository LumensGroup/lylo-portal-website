/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useMemo } from "react";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({ source, className }) => {
  const isRemoteSource = useMemo(
    () => source?.startsWith("https://") || source?.startsWith("http://"),
    [source]
  );

  let src: any = source;

  if (!isRemoteSource) {
    try {
      src = require(`@/bases/assets/icons/${source}.webp`);
    } catch {
      src = null;
    }
  }

  return <img className={className} src={src} alt="Icon" />;
};

export default Icon;
