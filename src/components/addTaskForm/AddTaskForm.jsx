import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { TextField, Button, Box } from "@mui/material";

const AddTaskForm = () => {
  const [input, setInput] = useState("");
  const { addTask, theme } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input.trim());
    setInput("");
  };

  const isDark = theme === "dark";

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        mt: 2,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Add task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{
          backgroundColor: isDark ? "#262627" : "inherit",
          borderRadius: "8px",
          input: {
            color: isDark ? "#CDCDCD" : "inherit",
          },
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: isDark ? "#FFFFFF" : "#1B1C1D",
          color: isDark ? "#000" : "#fff",
          "&:hover": {
            backgroundColor: isDark ? "#e0e0e0" : "#333",
          },
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddTaskForm;
