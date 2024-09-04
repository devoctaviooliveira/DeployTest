/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "DeployTest",
      providers: {
        aws: {
          profile: "octaviooliveira"
        }
      },
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/storage");
    await import("./infra/api");
    const frontend = await import("./infra/web");
    return {
      frontend: frontend.frontend.url
    }
  },
});