export function toggle(id) {
  return {
    type: "TOGG_FAVORITE",
    payload: id,
  };
}
