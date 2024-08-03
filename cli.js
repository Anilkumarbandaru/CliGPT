const { program } = require("commander");
const { geminiModel } = require("./lib/gemini")
program
    .version("1.0.0")
    .description("A Node CLI app that generates response by using Google Gemini")

program
    .command("prompt <prompt>")
    .alias("p")
    .description("Genearates an Google Gemini response for a given text prompt")
    .action( async (prompt) => {
       try{
        console.log(`Finding better results for you 😎 ...`);
        const res = await geminiModel.completion(prompt);
       }catch (error) {
        if (error instanceof GoogleGenerativeAIFetchError) {
            const statusCode = error.status;
            const reason = error.errorDetails?.[0]?.reason;
            console.error(`Status Code: ${statusCode}, Reason: ${reason}`);
          } else {
            console.error('An unexpected error occurred:', error);
          }
        process.exit(1);
       }
    })

    program.parse(process.argv)