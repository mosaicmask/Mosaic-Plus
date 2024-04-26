/** 用于自动发布*/
import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";
export const publishComponent = async () => {
  await run("release-it", `${pkgPath}/mosaic-plus`);
};
export default series(async () => publishComponent());