import fg from "fast-glob";
import fs from "fs";
import path from "path";

const COMPONENTS_DIR = "src";

const IGNORED_FILES = [
  "main.tsx",
  "vite-env.d.ts",
  "theme.ts"
];

// Palavras-chave que indicam uso do tema
const THEME_KEYWORDS = [
  "theme.colors",
  "props.theme.colors",
  "useTheme",
  "styled",
];

// Regex para detectar estilos inline e uso direto de cores
const INLINE_STYLE_REGEX = /style\s*=\s*{{[^}]*}}/g;
const COLOR_REGEX = /color\s*:\s*['"`]?#?[a-zA-Z0-9]+['"`]?/gi;

const checkFile = (filePath: string, chalk: any): void => {
  const relativePath = path.relative(process.cwd(), filePath);

  // Ignorar arquivos específicos
  if (IGNORED_FILES.some(name => relativePath.endsWith(name))) {
    return;
  }

  const content = fs.readFileSync(filePath, "utf-8");

  const usesTheme = THEME_KEYWORDS.some(keyword => content.includes(keyword));
  const hasInlineColor =
    INLINE_STYLE_REGEX.test(content) || COLOR_REGEX.test(content);

  if (!usesTheme && hasInlineColor) {
    console.log(
      chalk.default.yellow(`⚠️  ${relativePath} usa cor inline sem referência ao tema.`)
    );
  } else if (!usesTheme) {
    console.log(chalk.default.red(`❌ ${relativePath} não utiliza o tema.`));
  } else {
    console.log(chalk.default.green(`✅ ${relativePath} está usando o tema corretamente.`));
  }
};

const runCheck = async (): Promise<void> => {
  const chalk = await import("chalk");

  try {
    const files = await fg([
      `${COMPONENTS_DIR}/**/*.tsx`,
      `${COMPONENTS_DIR}/**/*.ts`,
    ]);

    console.log(
      chalk.default.blue(`🔍 Verificando ${files.length} arquivos em ${COMPONENTS_DIR}...\n`)
    );

    files.forEach(file => checkFile(file, chalk));
  } catch (error) {
    console.error(chalk.default.red("Erro ao executar verificação:"), error);
  }
};

runCheck();
