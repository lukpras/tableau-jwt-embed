// import { SheetType, TableauEventType } from "@tableau/embedding-api";
// import { generateToken } from "./generateToken.js";

// // Generate or fetch token options
// const options = {
//   secret: "AItFep52xj45V733MOLuJBiyLLD0T1LW1CAG0GlbyXI=",
//   secretId: "7a1a1a80-5b8d-4f5d-a8af-4c61421beaaf",
//   clientId: "294bdfe2-1ad4-4f8c-a5e8-e84e97382f11",
//   scopes: ["tableau:views:embed", "tableau:views:embed_authoring"],
//   userId: "luki@inixindobdg.co.id",
//   tokenExpiryInMinutes: 1, // Max of 10 minutes
//   userAttributes: {},
// };

// async function initializeViz() {
//   const viz = document.getElementById("tableauViz");

//   // Generate token
//   const token = await generateToken(options);

//   // Check if token is generated correctly
//   console.log("Generated Token:", token);

//   // Set token to tableau-viz element
//   viz.setAttribute("token", token);

//   await new Promise((resolve, reject) => {
//     viz.addEventListener(TableauEventType.FirstInteractive, () => {
//       console.log("Viz is interactive!");
//       resolve();
//     });

//     viz.addEventListener(TableauEventType.VizLoadError, (error) => {
//       const message = JSON.parse(error.detail.message);
//       const errorMessage = JSON.parse(message.errorMessage);

//       const displayMessage = `ca-error-${errorMessage.result.errors[0].code}`;
//       reject(displayMessage);
//     });
//   });

//   let worksheet;

//   if (viz.workbook.activeSheet.sheetType === SheetType.Dashboard) {
//     const dashboard = viz.workbook.activeSheet;
//     worksheet = dashboard.worksheets.find(
//       (ws) => ws.name === "Replace-Name-of-Worksheet"
//     );
//   } else {
//     worksheet = viz.workbook.activeSheet;
//   }

//   // Now you can interact with the worksheet.
// }

// window.onload = initializeViz;

// index.js
import { SheetType, TableauEventType } from "@tableau/embedding-api";

async function initializeViz() {
  const viz = document.getElementById("tableauViz");

  try {
    console.log("Attempting to fetch token...");
    const response = await fetch('http://localhost:3000/generateToken');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch token: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log("Token Data:", data);
    
    const token = data.token;
    console.log("Generated Token:", token);

    viz.setAttribute("token", token);
    console.log("Viz Element with Token:", viz);

    await new Promise((resolve, reject) => {
      viz.addEventListener(TableauEventType.FirstInteractive, () => {
        console.log("Viz is interactive!");
        resolve();
      });

      viz.addEventListener(TableauEventType.VizLoadError, (error) => {
        const message = JSON.parse(error.detail.message);
        const errorMessage = JSON.parse(message.errorMessage);
        const displayMessage = `ca-error-${errorMessage.result.errors[0].code}`;
        reject(displayMessage);
      });
    });
  } catch (error) {
    console.error("Error during initialization:", error);
  }
}



window.onload = initializeViz;