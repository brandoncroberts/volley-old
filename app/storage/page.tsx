"use client";

import { StorageManagerUploadActionsExample } from "@/components/StorageManager";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { ListPaginateOutput, list } from "aws-amplify/storage";
import { useEffect, useState } from "react";

function Storage() {
  const [listData, setListData] = useState<ListPaginateOutput>();
  const [isLoading, setLoading] = useState(false);
  console.log("🚀 ~ Storage ~ listData:", listData);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setLoading(true);
        const result = await list();
        setListData(result);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchList();
  }, []);

  return (
    <>
      <StorageManagerUploadActionsExample />
      {isLoading
        ? "loading"
        : listData?.items.map((x, idx) => (
            <StorageImage
              key={idx}
              alt="fallback cat"
              imgKey={x.key}
              accessLevel="guest"
              fallbackSrc="/fallback_cat.jpg"
              onStorageGetError={(error) => console.error(error)}
            />
          ))}
    </>
  );
}

export default withAuthenticator(Storage);
