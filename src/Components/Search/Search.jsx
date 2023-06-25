import { Grid } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { searchBoxStyle, searchBtnStyle } from "../../Constants/styles";
import { ButtonComponent } from "../InputComponents/ButtonComponent/ButtonComponent";
import { TextBoxComponent } from "../InputComponents/TextBoxComponent/TextBoxComponent";

export const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <TextBoxComponent
          id="search"
          type="search"
          label="Search Product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
              setSearch("");
            }
          }}
          className="search_box"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          size="large"
          sx={searchBoxStyle}
        />
      </Grid>
      <Grid item>
        <ButtonComponent
          label="Search"
          className="btn_search"
          size="large"
          style={searchBtnStyle}
          onClick={() => {
            handleSearch();
            setSearch("");
          }}
        />
      </Grid>
    </Grid>
  );
};
