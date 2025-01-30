import fs from "fs";
import path from "path";

const appDirectory = path.resolve(process.cwd(), "src/app");

interface Menu {
  label: string;
  children: Menu[];
  href: string;
}

export function getAllMenus() {
  const menus: Menu[] = [];

  function readDirRecursive(dir: string) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        const children = readDirRecursive(filePath);
        if (children.length > 0) {
          menus.push({
            label: path.basename(filePath),
            children,
            href: "",
          });
        }
      } else if (
        file === "page.tsx" &&
        dir.replace(/\\/g, "/")?.includes("/en/")
      ) {
        console.log(filePath);
        menus.push({
          label: path.basename(dir),
          children: [],
          href: dir.replace(appDirectory, "").replace(/\\/g, "/"),
        });
      }
    });

    return menus;
  }

  readDirRecursive(appDirectory);

  return menus;
}
