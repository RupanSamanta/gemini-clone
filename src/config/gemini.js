// const apiKey = "AIzaSyCzBjWaEswQL12ImjSmhUUON9B0tFFJvkg";

// async function getChatResponse(prompt) {
    
//     // Priority 1: Newest Model | Priority 2: Stable Backup
//     const models = ["gemini-3-flash-preview", "gemini-2.5-flash"];
    
//     for (let model of models) {
//         console.log(`Attempting request with ${model}...`);
//         const startTime = performance.now();

//         try {
//             const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
//                 method: 'POST',
//                 headers: { "Content-Type": "application/json", "X-goog-api-key": apiKey },
//                 body: JSON.stringify({ "contents": [{ "parts": [{ "text": prompt }] }] })
//             });

//             const data = await res.json();
//             const responseTime = (performance.now() - startTime).toFixed(2);

//             if (res.status === 200) {
//                 console.log(`✅ Success! [${model}] Time: ${responseTime}ms`);
//                 return data.candidates[0].content.parts[0].text;
//             } 
            
//             if (res.status === 503) {
//                 console.warn(`⚠️ ${model} is busy (503). Trying next model...`);
//                 continue; // Move to the next model in the list
//             }

//             console.error(`❌ Error ${res.status}:`, data.error.message);
//             break; 

//         } catch (err) {
//             console.error("Network failed:", err);
//             break;
//         }
//     }
//     return "I'm a bit overwhelmed right now. Please try again in a minute!";
// }

// // async function listMyModels() {
// //     const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
// //     const data = await res.json();
// //     console.log("Available models:", data.models.map(m => m.name));
// // }

// console.log(await getChatResponse("what is react js?"));

// //listMyModels();