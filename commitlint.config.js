export default {
  extends: ["@commitlint/config-conventional"],
  ignores: [
    (message) => message.includes("WIP"),
    (message) => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message),
  ],
};
