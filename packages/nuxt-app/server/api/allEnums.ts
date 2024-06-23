export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const data = await $fetch<{
    body: Record<string, any[]>,
    msg: string,
    rsCode: string
  }>(
    `${config.public.apiBase}/api/dingding/get_all_enums`,
    {
      method: "GET",
    }
  );
  return data;
});
