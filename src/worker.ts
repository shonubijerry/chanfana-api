import router from "./index";

export default {
  fetch: router.fetch,
  scheduled: async (event, env, ctx) => {
    console.log(event);
  },
} satisfies ExportedHandler;
