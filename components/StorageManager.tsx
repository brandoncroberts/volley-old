"use-client";

import { StorageManager } from "@aws-amplify/ui-react-storage";

export const StorageManagerUploadActionsExample = () => {
  return (
    <StorageManager
      onUploadSuccess={(uploadData) => {
        console.log(
          "🚀 ~ StorageManagerUploadActionsExample ~ uploadData:",
          uploadData
        );
      }}
      acceptedFileTypes={["image/*"]}
      accessLevel="guest"
      autoUpload={false}
      maxFileCount={1}
      isResumable
    />
  );
};
