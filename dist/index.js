"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const generateComponent_1 = require("./generateComponent");
const prompts_1 = require("./prompts");
async function run() {
    const answers = await inquirer_1.default.prompt(prompts_1.questions);
    await (0, generateComponent_1.generateComponent)(answers);
}
run().catch((error) => console.error('Error:', error));
