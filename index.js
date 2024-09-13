import { GoogleGenerativeAI } from '@google/generative-ai';
import inquirer from 'inquirer';

const genAI = new GoogleGenerativeAI("AIzaSyBHNKS7YYsuhidcMBv8p_v1PwmEVhalmhA");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Prompt the user to select a mode (Fun or Serious)
const promptMode = async () => {
    const { mode } = await inquirer.prompt([
        {
            type: 'list',
            name: 'mode',
            message: 'Choose a mode for the commit message:',
            choices: ['Fun Mode', 'Serious Mode'],
        },
    ]);

    return mode;
};

// Prompt the user to select the commit type
const promptCommitType = async () => {
    const { commitType } = await inquirer.prompt([
        {
            type: 'list',
            name: 'commitType',
            message: 'What type of change did you make?',
            choices: ['Feature', 'Bug Fix', 'Improvement', 'Code Review', 'Other'],
        },
    ]);

    return commitType;
};

// Prompt the user to enter commit details
const promptCommitDetails = async () => {
    const { details } = await inquirer.prompt([
        {
            type: 'input',
            name: 'details',
            message: 'Briefly describe what you worked on:',
        },
    ]);

    return details;
};

// Generate the commit message based on the selected mode
const generateCommitMessage = async (mode, commitType, details) => {
    let prompt;

    if (mode === 'Fun Mode') {
        prompt = `
        You are a witty AI that helps generate git commit messages.
        Commit type: ${commitType}
        Details: ${details}
        Make the commit message funny, creative, and enjoyable. Limit the response to a maximum of 8 words.
        `;
    } else {
        prompt = `
        You are a serious AI that helps generate git commit messages.
        Commit type: ${commitType}
        Details: ${details}
        Generate a professional, concise git commit message. Limit the response to a maximum of 8 words.
        `;
    }

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text();
};

// Main function to generate and confirm the commit message
const generateCommit = async () => {
    try {
        const mode = await promptMode(); // Select mode
        const commitType = await promptCommitType();
        const details = await promptCommitDetails();
        const commitMessage = await generateCommitMessage(mode, commitType, details);

        console.log("\nGenerated Commit Message:\n", commitMessage);

        const { confirmCommit } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmCommit',
                message: 'Do you want to use this commit message?',
                default: true,
            },
        ]);

        if (confirmCommit) {
            const commit = `git commit -m "${commitMessage}"`;
            console.log(commit);
            console.log("Commit successfully created!");
        } else {
            console.log("Commit aborted.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
};

// Run the application
generateCommit();
