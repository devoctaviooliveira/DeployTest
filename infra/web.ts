import { api } from "./api";
import { bucket } from "./storage";

const region = aws.getRegionOutput().name;

export const frontend = new sst.aws.StaticSite("Frontend", {
  path: "packages/web",
  build: {
    output: "dist",
    command: "npm run build",
  },
  environment: {
    VITE_REGION: region,
    VITE_API_URL: api.url,
    VITE_BUCKET: bucket.name,
  },
});