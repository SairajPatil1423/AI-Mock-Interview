import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials:{
    url: 'postgresql://neondb_owner:wTQ8C6DpdiaP@ep-morning-paper-a8iyqyja.eastus2.azure.neon.tech/AI-mocker?sslmode=require',
  }
});
