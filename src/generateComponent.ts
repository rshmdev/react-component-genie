import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

interface Answers {
  componentName: string;
  directory: string;
  style: "Tailwind" | "Styled Components" | "CSS";
  test: "Jest" | "Nenhum";
  useTypescript: boolean;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function generateComponent(answers: Answers) {
  let { componentName, directory, style, test, useTypescript } = answers;
  componentName = capitalizeFirstLetter(componentName);
  const componentDir = path.join(process.cwd(), directory, componentName);

  await fs.ensureDir(componentDir);

  // Definir a extensão do arquivo com base no uso do TypeScript
  const ext = useTypescript ? "tsx" : "jsx";

  // Criar o arquivo de componente
  const componentTemplatePath = path.join(
    __dirname,
    "templates",
    `ComponentName.${ext}`
  );
  const componentTemplate = await fs.readFile(componentTemplatePath, "utf-8");
  await fs.writeFile(
    path.join(componentDir, `${componentName}.${ext}`),
    componentTemplate.replace(/ComponentName/g, componentName)
  );

  // Criar o arquivo de estilo se não for Tailwind
  if (style !== "Tailwind") {
    let styleTemplate = "";
    if (style === "CSS") {
      styleTemplate = await fs.readFile(
        path.join(__dirname, "templates", "style.css"),
        "utf-8"
      );
    } else if (style === "Styled Components") {
      styleTemplate = await fs.readFile(
        path.join(__dirname, "templates", "style.styled.ts"),
        "utf-8"
      );
    }
    await fs.writeFile(
      path.join(
        componentDir,
        `${componentName}.module.${
          style === "Styled Components" ? "ts" : "css"
        }`
      ),
      styleTemplate
    );
  }

  // Criar o arquivo de teste
  if (test !== "Nenhum") {
    const testExt = useTypescript ? "tsx" : "jsx";
    let testTemplatePath = "";
    if (test === "Jest") {
      testTemplatePath = path.join(
        __dirname,
        "templates",
        `component.test.${testExt}`
      );
    }
    
    const testTemplate = await fs.readFile(testTemplatePath, "utf-8");
    await fs.writeFile(
      path.join(componentDir, `${componentName}.test.${testExt}`),
      testTemplate.replace(/ComponentName/g, componentName)
    );
  }

  console.log(
    chalk.green(
      `Componente ${componentName} criado com sucesso no diretório ${directory}!`
    )
  );
}
