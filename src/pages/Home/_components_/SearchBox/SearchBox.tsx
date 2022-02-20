import { useNavigate } from "react-router-dom";

// styles
import styles from "../../Home.module.scss";
import { SearchForm } from "../../../../components/SearchForm/SearchForm";

interface Props {}

const SearchBox: React.FC<Props> = () => {
  const navigate = useNavigate();

  const onSubmit = (term: string) => {
    navigate(`/search?q=${term.replace(" ", "+")}`);
  };

  return (
    <div className={styles.searchBoxContainer}>
      <SearchForm onSubmit={onSubmit} />
    </div>
  );
};

export { SearchBox };
