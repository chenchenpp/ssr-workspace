export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  console.log(1111)
  const data = await $fetch<{
    body: Record<string, any[]>;
    msg: string;
    rsCode: string;
  }>(`${config.public.apiBase}/api/dingding/get_all_enums`, {
    method: "GET",
  });
  return data;
});
