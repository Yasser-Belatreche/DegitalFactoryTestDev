import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

// mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// styles
import styles from "./SearchForm.module.scss";

interface Props {
  onSubmit: (searchTerm: string) => void;
}

const SearchForm: React.FC<Props> = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();

  const [searchInput, setSearchInput] = useState<string | undefined>(
    searchParams.get("q")?.replace("+", " ")
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!searchInput) return;

    onSubmit(searchInput);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <TextField
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        variant="outlined"
        label="Search"
        fullWidth
      />
      <Button className={styles.button} type="submit" variant="contained">
        Search
      </Button>
    </form>
  );
};

export { SearchForm };
