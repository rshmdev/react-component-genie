"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = void 0;
exports.questions = [
    {
        type: 'input',
        name: 'componentName',
        message: 'Qual é o nome do componente?',
        validate: (input) => {
            if (!input.trim()) {
                return 'O nome do componente não pode estar vazio';
            }
            if (!/^[a-zA-Z]+$/.test(input)) {
                return 'O nome do componente deve conter apenas letras';
            }
            return true;
        },
        filter: (input) => input.toLowerCase(),
    },
    {
        type: 'input',
        name: 'directory',
        message: 'Em qual diretório você quer criar o componente?',
        default: 'src/components',
        validate: (input) => {
            if (!input.trim()) {
                return 'O diretório não pode estar vazio';
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'style',
        message: 'Qual estilo você quer usar?',
        choices: ['Tailwind', 'Styled Components', 'CSS'],
    },
    {
        type: 'list',
        name: 'test',
        message: 'Você quer incluir testes?',
        choices: ['Jest', 'Nenhum'],
    },
    {
        type: 'confirm',
        name: 'useTypescript',
        message: 'Você quer usar TypeScript?',
        default: true,
    },
];
