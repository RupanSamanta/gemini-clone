// const API_KEY = 'AIzaSyDfk4RZ4w7_eEmfNRwPUNt4coOHeAK0btg';

// import {GoogleGenAI, FunctionCallingConfigMode, FunctionDeclaration, Type} from '@google/genai';
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// async function main() {
//   const controlLightDeclaration: FunctionDeclaration = {
//     name: 'controlLight',
//     parametersJsonSchema: {
//       type: 'object',
//       properties:{
//         brightness: {
//           type:'number',
//         },
//         colorTemperature: {
//           type:'string',
//         },
//       },
//       required: ['brightness', 'colorTemperature'],
//     },
//   };

//   const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});
//   const response = await ai.models.generateContent({
//     model: 'gemini-2.5-flash',
//     contents: 'Dim the lights so the room feels cozy and warm.',
//     config: {
//       toolConfig: {
//         functionCallingConfig: {
//           // Force it to call any function
//           mode: FunctionCallingConfigMode.ANY,
//           allowedFunctionNames: ['controlLight'],
//         }
//       },
//       tools: [{functionDeclarations: [controlLightDeclaration]}]
//     }
//   });

//   console.log(response.functionCalls);
// }

// main();


// // curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
// //   -H 'Content-Type: application/json' \
// //   -H 'X-goog-api-key: AIzaSyCvMGFqnlhtmSaVd6VSvoVqgtesQYKxXCQ' \
// //   -X POST \
// //   -d '{
// //     "contents": [
// //       {
// //         "parts": [
// //           {
// //             "text": "Explain how AI works in a few words"
// //           }
// //         ]
// //       }
// //     ]
// //   }'