const container = document.getElementById("grid-container");
      const gridSize = 16;

      function createGrid() {
        for (let i = 0; i < gridSize * gridSize; i++) {
          const square = document.createElement("div");
          square.classList.add("square");
          container.appendChild(square);
        }
      }

      function clearGrid() {
        container.innerHTML = "";
      }

      function createNewGrid() {
        const userInput = prompt(
          "Enter the number of squares per side (maximum 100):"
        );
        const newGridSize = parseInt(userInput);
        if (!isNaN(newGridSize) && newGridSize > 0 && newGridSize <= 100) {
          clearGrid();
          container.style.width = `${newGridSize * 30}px`;
          container.style.height = `${newGridSize * 30}px`;
          for (let i = 0; i < newGridSize * newGridSize; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
          }
        } else {
          alert(
            "Invalid input. Please enter a valid number between 1 and 100."
          );
        }
      }

      createGrid();