import { useState, useRef, useEffect, useCallback } from "react";

const useDragAndDrop = (items, onReorder) => {
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const dragNodeRef = useRef(null);

  // Handle drag start
  const handleDragStart = (e, index) => {
    dragNodeRef.current = e.target;
    dragNodeRef.current.addEventListener("dragend", handleDragEnd);

    // Set timeout to prevent UI glitches
    setTimeout(() => {
      setDraggedItemIndex(index);
    }, 0);

    // Required for Firefox
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.innerHTML);
  };

  // Handle drag enter
  const handleDragEnter = (e, index) => {
    e.preventDefault();
    if (index !== draggedItemIndex) {
      setHoveredItemIndex(index);
    }
  };

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    return false;
  };

  // Handle drop
  const handleDrop = (e) => {
    e.preventDefault();

    if (
      draggedItemIndex !== null &&
      hoveredItemIndex !== null &&
      draggedItemIndex !== hoveredItemIndex
    ) {
      // Create a copy of the items array
      const itemsCopy = [...items];

      // Get the dragged item
      const draggedItem = itemsCopy[draggedItemIndex];

      // Remove the dragged item from the array
      itemsCopy.splice(draggedItemIndex, 1);

      // Insert the dragged item at the new position
      itemsCopy.splice(hoveredItemIndex, 0, draggedItem);

      // Call the callback with the reordered items
      onReorder(itemsCopy);
    }

    // Reset state
    setDraggedItemIndex(null);
    setHoveredItemIndex(null);

    return false;
  };

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    if (dragNodeRef.current) {
      dragNodeRef.current.removeEventListener("dragend", handleDragEnd);
      dragNodeRef.current = null;
    }
    setDraggedItemIndex(null);
    setHoveredItemIndex(null);
  }, []);

  // Clean up event listeners
  useEffect(() => {
    return () => {
      if (dragNodeRef.current) {
        dragNodeRef.current.removeEventListener("dragend", handleDragEnd);
      }
    };
  }, [handleDragEnd]);

  // Return handlers and state for use in components
  return {
    draggedItemIndex,
    hoveredItemIndex,
    handlers: {
      handleDragStart,
      handleDragEnter,
      handleDragOver,
      handleDrop,
    },
  };
};

export default useDragAndDrop;
