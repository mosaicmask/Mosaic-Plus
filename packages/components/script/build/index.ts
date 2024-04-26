import delPath from "../utils/delpath";
import {series, parallel, src, dest} from "gulp";
import autoprefixer from "gulp-autoprefixer";
import {pkgPath, componentPath} from "../utils/paths";
import run from "../utils/run"

const sass = require('gulp-sass')(require('sass'));

//删除先前打包的mosaic-plus文件
export const removeDist = () => {
  return delPath(`${pkgPath}/mosaic-plus`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/mosaic-plus/lib/components`))
    .pipe(dest(`${pkgPath}/mosaic-plus/es/components`));
};

//打包组件
export const buildComponent = async () => {
  await run("pnpm run build", componentPath);
};

// parallel 并行执行
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);