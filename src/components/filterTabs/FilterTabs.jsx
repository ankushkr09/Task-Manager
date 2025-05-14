import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const FilterTabs = () => {
  const { filter, setFilter, theme } = useContext(TaskContext);
  const isDark = theme === "dark";

  return (
    <ToggleButtonGroup
      value={filter}
      exclusive
      onChange={(e, newFilter) => {
        if (newFilter !== null) setFilter(newFilter);
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 2,
      }}
    >
      {["ALL", "COMPLETED", "PENDING"].map((f) => (
        <ToggleButton
          key={f}
          value={f}
          sx={{
            textTransform: "none",
            color: isDark ? "#CDCDCD" : "#333",
            borderColor: isDark ? "#444" : "#ccc",
            backgroundColor:
              filter === f
                ? isDark
                  ? "#ffffff20"
                  : "#00000010"
                : "transparent",
            fontWeight: filter === f ? "bold" : "normal",
            "&.Mui-selected": {
              backgroundColor: isDark ? "#EFEEEE" : "#262627",
              color: isDark ? "#000" : "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: isDark ? "#64b5f6" : "#1565c0",
              },
            },
          }}
        >
          {f}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterTabs;
