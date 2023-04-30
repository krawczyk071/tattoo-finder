export function add(tat) {
  return {
    type: "CART_ADD",
    payload: tat,
  };
}
export function remove(tat) {
  return {
    type: "TOGCART_REMOVEG_FAVORITE",
    payload: tat,
  };
}
export function clear() {
  return {
    type: "CART_EMPTY",
  };
}
