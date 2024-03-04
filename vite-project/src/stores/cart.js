import { reactive } from 'vue'

export const cart = reactive([])

export function calculatemerchTotal() {
  for(let i = 0; i < cart.length; i++) {
    cart[i].merchTotal = cart[i].unitCost * cart[i].quantity;
  };
}