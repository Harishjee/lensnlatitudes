import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Defaults are fine for this site. Incremental cache / R2 can be added
  // later if we start using ISR or on-demand revalidation.
});
