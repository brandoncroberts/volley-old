"use client";

import { StorageManagerUploadActionsExample } from "@/components/StorageManager";
import { StorageVideo } from "@/components/StorageVideo";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { ListPaginateOutput, list } from "aws-amplify/storage";
import { useEffect, useState } from "react";

function Storage() {
  const [listData, setListData] = useState<ListPaginateOutput>();
  const [isLoading, setLoading] = useState(false);

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
        : listData?.items.map((x, idx) => {
            console.log("🚀 ~ Storage ~ x.key:", x.key);
            return (
              <StorageVideo
                key={idx}
                alt="fallback cat"
                accessLevel="guest"
                videoKey="Screen Recording 2024-02-12 at 09.41.54.mov"
              />
            );
          })}
    </>
  );
}

export default withAuthenticator(Storage);
