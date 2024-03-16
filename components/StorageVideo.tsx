import * as React from "react";
import { classNames, ComponentClassName, isUndefined } from "@aws-amplify/ui";
import { useSetUserAgent } from "@aws-amplify/ui-react-core";
import { useStorageURL } from "@/hooks/useStorageUrl";

export const StorageVideo = ({
  accessLevel,
  className,
  fallbackSrc,
  identityId,
  videoKey,
  onStorageGetError,
  validateObjectExistence,
  ...rest
}: any): JSX.Element => {
  const resolvedValidateObjectExistence = isUndefined(validateObjectExistence)
    ? true
    : validateObjectExistence;
  const options = React.useMemo(
    () => ({
      accessLevel,
      targetIdentityId: identityId,
      validateObjectExistence: resolvedValidateObjectExistence,
    }),
    [accessLevel, identityId, resolvedValidateObjectExistence]
  );

  useSetUserAgent({
    componentName: "StorageImage",
    packageName: "react-storage",
    version: `${"1"}.${"1"}.${"1"}`,
  });

  const url = useStorageURL({
    key: videoKey,
    options,
    fallbackURL: fallbackSrc,
    onStorageGetError,
  });

  return (
    <video
      {...rest}
      className={classNames(ComponentClassName.StorageImage, className)}
      src={url}
      controls // Add basic controls
    />
  );
};
