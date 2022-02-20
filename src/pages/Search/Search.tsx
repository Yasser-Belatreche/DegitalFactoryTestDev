import React from "react";

// mui
import CircularProgress from "@mui/material/CircularProgress";

// styles
import styles from "./Search.module.scss";

// components
import { Layout } from "../../components/Layout/Layout";
import { MediaCard } from "../../components/MediaCard/MediaCard";
import { ICONS } from "../../utils/constants/Icons";

// hooks
import { useSearchResult } from "./_hooks_/useSearchResult";

interface Props {}

const Search: React.FC<Props> = () => {
  const { data, loading } = useSearchResult();

  console.log(data, loading);

  return (
    <Layout>
      <div className={styles.container}>
        {loading ? (
          <CircularProgress />
        ) : (
          data?.map((ele) => {
            return (
              <MediaCard
                key={ele.artistId}
                id={ele.artistId}
                title={ele.collectionName}
                image={ICONS.AppleIcon}
                artist={ele.artistName}
                album={ele.collectionCensoredName}
              />
            );
          })
        )}
      </div>
    </Layout>
  );
};

export { Search };
