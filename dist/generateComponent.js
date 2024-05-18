"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateComponent = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
async function generateComponent(answers) {
    let { componentName, directory, style, test, useTypescript } = answers;
    componentName = capitalizeFirstLetter(componentName);
    const componentDir = path_1.default.join(process.cwd(), directory, componentName);
    await fs_extra_1.default.ensureDir(componentDir);
    // Definir a extensão do arquivo com base no uso do TypeScript
    const ext = useTypescript ? "tsx" : "jsx";
    // Criar o arquivo de componente
    const componentTemplatePath = path_1.default.join(__dirname, "templates", `ComponentName.${ext}`);
    const componentTemplate = await fs_extra_1.default.readFile(componentTemplatePath, "utf-8");
    await fs_extra_1.default.writeFile(path_1.default.join(componentDir, `${componentName}.${ext}`), componentTemplate.replace(/ComponentName/g, componentName));
    // Criar o arquivo de estilo se não for Tailwind
    if (style !== "Tailwind") {
        let styleTemplate = "";
        if (style === "CSS") {
            styleTemplate = await fs_extra_1.default.readFile(path_1.default.join(__dirname, "templates", "style.css"), "utf-8");
        }
        else if (style === "Styled Components") {
            styleTemplate = await fs_extra_1.default.readFile(path_1.default.join(__dirname, "templates", "style.styled.ts"), "utf-8");
        }
        await fs_extra_1.default.writeFile(path_1.default.join(componentDir, `${componentName}.module.${style === "Styled Components" ? "ts" : "css"}`), styleTemplate);
    }
    // Criar o arquivo de teste
    if (test !== "Nenhum") {
        const testExt = useTypescript ? "tsx" : "jsx";
        let testTemplatePath = "";
        if (test === "Jest") {
            testTemplatePath = path_1.default.join(__dirname, "templates", `component.test.${testExt}`);
        }
        const testTemplate = await fs_extra_1.default.readFile(testTemplatePath, "utf-8");
        await fs_extra_1.default.writeFile(path_1.default.join(componentDir, `${componentName}.test.${testExt}`), testTemplate.replace(/ComponentName/g, componentName));
    }
    console.log(chalk_1.default.green(`Componente ${componentName} criado com sucesso no diretório ${directory}!`));
}
exports.generateComponent = generateComponent;
