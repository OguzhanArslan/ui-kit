import fs from "node:fs/promises";
import path from "node:path";
import { transform } from "@svgr/core";

const RAW_DIR = path.resolve("icons");
const OUT_DIR = path.resolve("src/components/icons/generated");
const INDEX_FILE = path.resolve("src/components/icons/index.ts");

const slugify = (name) =>
    name
        .trim()
        .replace(/\.(svg|tsx)$/i, "")
        .replace(/[\s_]+/g, "-")
        .replace(/[^a-zA-Z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

const pascalCase = (slug) =>
    slug
        .split("-")
        .filter(Boolean)
        .map((p) => p[0].toUpperCase() + p.slice(1))
        .join("");

async function main() {
    // OUT_DIR'i temizle (stale/bozuk dosyalar kalmasın)
    await fs.rm(OUT_DIR, { recursive: true, force: true });
    await fs.mkdir(OUT_DIR, { recursive: true });

    const files = (await fs.readdir(RAW_DIR)).filter((f) => /\.(svg|tsx)$/i.test(f));
    const exports = [];

    for (const file of files) {
        const inputPath = path.join(RAW_DIR, file);
        const raw = (await fs.readFile(inputPath, "utf8")).trim();

        if (!raw.startsWith("<svg")) continue;

        const slug = slugify(path.parse(file).name);
        const componentName = `${pascalCase(slug)}Icon`;
        const outPath = path.join(OUT_DIR, `${componentName}.tsx`);

        // (İsteğe bağlı) tek renk ikonlarda siyahları currentColor'a çevir
        const normalized = raw
            .replace(/stroke="(#000000|#000|black)"/gi, 'stroke="currentColor"')
            .replace(/fill="(#000000|#000|black)"/gi, 'fill="currentColor"');

        const code = await transform(
            normalized,
            {
                plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
                typescript: true,
                icon: true,
                expandProps: "end",
                prettier: false,
                svgoConfig: {
                    plugins: [
                        {
                            name: "preset-default",
                            params: { overrides: { removeViewBox: false } },
                        },
                    ],
                },
                template: ({ componentName, jsx }, { tpl }) => tpl`
                    import type { SVGProps } from "react";

                    const ${componentName} = (props: SVGProps<SVGSVGElement>) => ${jsx};

                    export default ${componentName};
                `,
            },
            { componentName }
        );

        // Güvenlik kontrolü: Component üretilmediyse bozuk çıktı yazma
        if (!code.includes(`export default`) || !code.includes(componentName)) {
            throw new Error(
                `SVGR output invalid for ${file}. Did not generate a component.`
            );
        }

        await fs.writeFile(outPath, code, "utf8");
        exports.push(
            `export { default as ${componentName} } from "./generated/${componentName}";`
        );
    }

    exports.sort((a, b) => a.localeCompare(b));
    await fs.writeFile(INDEX_FILE, exports.join("\n") + "\n", "utf8");

    console.log(`✅ Generated ${exports.length} icons`);
}

main().catch((e) => {
    console.error("❌ generate-icons failed:", e);
    process.exit(1);
});
