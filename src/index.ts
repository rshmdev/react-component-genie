import inquirer from 'inquirer';
import { generateComponent } from './generateComponent';
import { questions } from './prompts';

async function run() {
  const answers = await inquirer.prompt(questions);
  await generateComponent(answers);
}

run().catch((error) => console.error('Error:', error));
