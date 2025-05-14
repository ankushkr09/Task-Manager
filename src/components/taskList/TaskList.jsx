// import React, { useContext, useMemo, useState, useCallback } from "react";
// import { TaskContext } from "../../context/TaskContext";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import {
//   Card,
//   CardContent,
//   Checkbox,
//   IconButton,
//   Typography,
//   Box,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { motion, AnimatePresence } from "framer-motion";
// import Confetti from "react-confetti";
// import { useWindowSize } from "@react-hook/window-size";

// const Task = React.memo(({ task, index, toggleTask, handleDelete, isDark }) => {
//   return (
//     <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
//       {(provided, snapshot) => (
//         <motion.div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           layout
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
//           style={{
//             cursor: snapshot.isDragging ? "grabbing" : "grab",
//             ...provided.draggableProps.style,
//           }}
//         >
//           <motion.div
//             initial={false}
//             animate={{
//               scale: task.completed ? 0.98 : 1,
//               transition: { duration: 0.3 },
//             }}
//           >
//             <Card
//               sx={{
//                 mb: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 borderRadius: 4,
//                 boxShadow: 3,
//                 color: isDark ? "#000" : "#000",
//                 background: task.completed
//                   ? "linear-gradient(to right, #a8e6cf, #dcedc1)"
//                   : "linear-gradient(to right, #ff8a80, #ffccbc)",
//                 transition: "background 0.3s ease",
//               }}
//             >
//               {/* Left Section: Checkbox */}
//               <Box
//                 sx={{ width: "15%", display: "flex", justifyContent: "center" }}
//               >
//                 <motion.div
//                   whileTap={{ scale: 0.85 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <Checkbox
//                     checked={task.completed}
//                     onChange={() => toggleTask(task.id)}
//                     color="success"
//                   />
//                 </motion.div>
//               </Box>

//               <CardContent sx={{ width: "70%", py: 1 }}>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     textDecoration: task.completed ? "line-through" : "none",
//                     fontWeight: 500,
//                     wordBreak: "break-word",
//                   }}
//                 >
//                   {task.text}
//                 </Typography>
//               </CardContent>

//               <Box
//                 sx={{ width: "15%", display: "flex", justifyContent: "center" }}
//               >
//                 <motion.div whileTap={{ scale: 0.85 }}>
//                   <IconButton
//                     onClick={() => handleDelete(task.id)}
//                     color="error"
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </motion.div>
//               </Box>
//             </Card>
//           </motion.div>
//         </motion.div>
//       )}
//     </Draggable>
//   );
// });

// // TaskList Component
// const TaskList = () => {
//   const { tasks, filter, toggleTask, deleteTask, setTasks, theme } =
//     useContext(TaskContext);
//   const [deletingTaskId, setDeletingTaskId] = useState(null);
//   const [showConfetti, setShowConfetti] = useState(false);

//   const { width, height } = useWindowSize();
//   const isDark = theme === "dark";

//   const filteredTasks = useMemo(() => {
//     if (filter === "COMPLETED") return tasks.filter((t) => t.completed);
//     if (filter === "PENDING") return tasks.filter((t) => !t.completed);
//     return tasks;
//   }, [filter, tasks]);

//   const handleTaskToggle = useCallback(
//     (taskId) => {
//       const task = tasks.find((t) => t.id === taskId);
//       if (!task.completed) {
//         toggleTask(taskId);
//         setShowConfetti(true);
//         setTimeout(() => setShowConfetti(false), 2000);
//       } else {
//         toggleTask(taskId);
//       }
//     },
//     [toggleTask, tasks]
//   );

//   const handleDelete = useCallback(
//     (id) => {
//       setDeletingTaskId(id);
//       setTimeout(() => {
//         deleteTask(id);
//         setDeletingTaskId(null);
//       }, 300);
//     },
//     [deleteTask]
//   );

//   const onDragEnd = (result) => {
//     if (!result.destination) return;

//     const reordered = Array.from(tasks);
//     const [moved] = reordered.splice(result.source.index, 1);
//     reordered.splice(result.destination.index, 0, moved);

//     setTasks(reordered);
//   };

//   return (
//     <>
//       {showConfetti && (
//         <Confetti
//           width={width}
//           height={height}
//           numberOfPieces={500}
//           gravity={9.8}
//           wind={1.0}
//         />
//       )}

//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="tasks">
//           {(provided) => (
//             <Box ref={provided.innerRef} {...provided.droppableProps} mt={2}>
//               <AnimatePresence>
//                 {filteredTasks.length === 0 ? (
//                   <Box
//                     display="flex"
//                     justifyContent="center"
//                     alignItems="center"
//                     height="100%"
//                   >
//                     {filter === "COMPLETED" ? (
//                       <Typography>No Tasks Completed Yet</Typography>
//                     ) : filter === "PENDING" ? (
//                       <Typography>Wohoo, All Tasks Completed</Typography>
//                     ) : (
//                       <Typography>Start Adding Tasks</Typography>
//                     )}
//                   </Box>
//                 ) : (
//                   filteredTasks.map((task, index) => (
//                     <Task
//                       key={task.id}
//                       task={task}
//                       index={index}
//                       toggleTask={handleTaskToggle}
//                       handleDelete={handleDelete}
//                       isDark={isDark}
//                     />
//                   ))
//                 )}
//               </AnimatePresence>
//               {provided.placeholder}
//             </Box>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </>
//   );
// };

// export default TaskList;

import React, { useContext, useMemo, useState, useCallback } from "react";
import { TaskContext } from "../../context/TaskContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Card,
  CardContent,
  Checkbox,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // NEW
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

// Task Component
const Task = React.memo(({ task, index, toggleTask, handleDelete, isDark }) => {
  return (
    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <motion.div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
          style={{
            cursor: snapshot.isDragging ? "grabbing" : "grab",
            ...provided.draggableProps.style,
          }}
        >
          <motion.div
            initial={false}
            animate={{
              scale: task.completed ? 0.98 : 1,
              transition: { duration: 0.3 },
            }}
          >
            <Card
              sx={{
                mb: 2,
                display: "flex",
                alignItems: "center",
                borderRadius: 4,
                boxShadow: 3,
                color: isDark ? "#000" : "#000",
                background: task.completed
                  ? "linear-gradient(to right, #a8e6cf, #dcedc1)"
                  : "linear-gradient(to right, #ff8a80, #ffccbc)",
                transition: "background 0.3s ease",
              }}
            >
              <Box
                sx={{ width: "15%", display: "flex", justifyContent: "center" }}
              >
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Checkbox
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    color="success"
                  />
                </motion.div>
              </Box>

              <CardContent sx={{ width: "70%", py: 1 }}>
                <Typography
                  variant="body1"
                  sx={{
                    textDecoration: task.completed ? "line-through" : "none",
                    fontWeight: 500,
                    wordBreak: "break-word",
                  }}
                >
                  {task.text}
                </Typography>
              </CardContent>

              <Box
                sx={{ width: "15%", display: "flex", justifyContent: "center" }}
              >
                <motion.div whileTap={{ scale: 0.85 }}>
                  <IconButton
                    onClick={() => handleDelete(task.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </motion.div>
              </Box>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </Draggable>
  );
});

// TaskList Component
const TaskList = () => {
  const { tasks, filter, toggleTask, deleteTask, setTasks, theme } =
    useContext(TaskContext);
  const [deletingTaskId, setDeletingTaskId] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const isDark = theme === "dark";

  const filteredTasks = useMemo(() => {
    if (filter === "COMPLETED") return tasks.filter((t) => t.completed);
    if (filter === "PENDING") return tasks.filter((t) => !t.completed);
    return tasks;
  }, [filter, tasks]);

  const handleTaskToggle = useCallback(
    (taskId) => {
      const task = tasks.find((t) => t.id === taskId);
      if (!task.completed) {
        toggleTask(taskId);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      } else {
        toggleTask(taskId);
      }
    },
    [toggleTask, tasks]
  );

  const handleDelete = useCallback(
    (id) => {
      setDeletingTaskId(id);
      setTimeout(() => {
        deleteTask(id);
        setDeletingTaskId(null);
      }, 300);
    },
    [deleteTask]
  );

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(tasks);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);

    setTasks(reordered);
  };

  const getEmptyState = () => {
    let icon = null;
    let message = "";
    const iconProps = {
      sx: { fontSize: 50, mb: 1 },
      color: isDark ? "#fff" : "#000",
    };

    switch (filter) {
      case "COMPLETED":
        icon = <AssignmentTurnedInIcon {...iconProps} />;
        message = "No Tasks Completed Yet";
        break;
      case "PENDING":
        icon = <AccessTimeIcon {...iconProps} />;
        message = "Wohoo, All Tasks Completed";
        break;
      default:
        icon = <FormatListBulletedIcon {...iconProps} />;
        message = "Start Adding Tasks";
        break;
    }

    return (
      <Box textAlign="center">
        {icon}
        <Typography variant="h6">{message}</Typography>
      </Box>
    );
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
          gravity={9.8}
          wind={1.0}
        />
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.droppableProps} mt={2}>
              <AnimatePresence>
                {filteredTasks.length === 0 ? (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                    flexDirection="column"
                    py={5}
                  >
                    {getEmptyState()}
                  </Box>
                ) : (
                  filteredTasks.map((task, index) => (
                    <Task
                      key={task.id}
                      task={task}
                      index={index}
                      toggleTask={handleTaskToggle}
                      handleDelete={handleDelete}
                      isDark={isDark}
                    />
                  ))
                )}
              </AnimatePresence>
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default TaskList;
