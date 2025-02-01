import fs from "fs";
import path from "path";

export interface IMenu {
  name: string;
  parentId: string;
  href: string;
  locale?: string;
  children?: IMenu[];
}

export interface IRoutes {
  all: Record<string, IMenu>,
  resolved: IMenu
}

export function GET_ROUTES(locale: string): IRoutes {
  const appDirectory = path.resolve(process.cwd(), `src/app/${locale}`);
  const all: Record<string, IMenu> = {};

  /**
   * Rekurzivni cteni adresaru
   *
   * @param {string} dir
   * @return {*} 
   */
  function readDirRecursive(dir: string) {
    // Vsechny soubory v adresari
    const files = fs.readdirSync(dir);
    // Zmena lomitek na lomitka
    dir = dir.replace(/\\/g, "/");

    files.forEach((file) => {
      // Absolutni cesta k souboru
      const filePath = path.join(dir, file);
      // Statistika souboru
      const stat = fs.statSync(filePath);

      // Pokud je soubor page.tsx, pridat do seznamu
      if (file === "page.tsx") {
        // Jmeno nadrazeneho adresare
        const parentId = path.basename(path.dirname(dir));
        // Pokud je to root adresar, pridat root
        if (parentId === "app") {
          all['root'] = {
            name: 'root',
            parentId: '',
            href: '/',
            locale,
            children: [],
          }
        }
        // Jinak prida aktualni soubor
        else {
          // Jmeno adresare
          let name = path.basename(dir);
          // Pokud je to dynamicka routa, prepise name za $--...
          const match = name.match(/^\[(.+)\]$/);
          if (match) {
            name = `$--${match[1]}`;
          }
          // Prida routu
          all[name] = {
            name,
            parentId: parentId === locale ? 'root' : parentId,
            href: parentId === locale ? `/${name}` : `/${parentId}/${name}`,
            locale,
            children: []
          };
        }
      }
      // Pokud je to adresar, rekurzivne zavolej funkci
      else if (stat.isDirectory()) {
        readDirRecursive(filePath);
      }
    });

    return all;
  }

  // Zavola rekurzivni funkci
  readDirRecursive(appDirectory);

  // Vytvori strom, tzn. do children vlozi potomky
  for (const name in all) {
    const route = all[name];
    all[route.parentId]?.children?.push(route);
  }

  return {
    resolved: all.root,
    all,
  };
}