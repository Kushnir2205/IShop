export const cartSelector = (state) => state.cart.carts;
export const selectedIds = (state) => state.cart.carts.map(({ _id }) => _id);
