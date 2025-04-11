import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

interface CardapioItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss'
})
export class CardapioComponent {
  menuItems = [
    { name: 'Burritos', description: 'Tortilla de farinha fresca, recheado com frango ao chipotle, Coberto com molho de queijo nacho. Arroz vermelho, feijão refrito, pico de gallo, creme azedo', price: 110.00, image: '/burritos.webp' },
    { name: 'Tacos', description: 'Tortilla de milho artesanal, recheado com carnitas (porco desfiado e dourado), cebola roxa, coentro fresco, abacate e molho salsa verde ou roja (caseiros)', price: 100.00, image: '/tacos.webp' },
    { name: 'Carnitas', description: 'Tortilla de farinha fresca, recheado com frango ao chipotle, Coberto com molho de queijo nacho. Arroz vermelho, feijão refrito, pico de gallo, creme azedo', price: 90.00, image: '/carnitas.webp' },
    { name: 'Birria', description: 'Tortilla de farinha fresca, recheado com frango ao chipotle, Coberto com molho de queijo nacho. Arroz vermelho, feijão refrito, pico de gallo, creme azedo', price: 85.00, image: '/birria.webp' },
    { name: 'Chilaquilles', description: 'Tortilla de farinha fresca, recheado com frango ao chipotle, Coberto com molho de queijo nacho. Arroz vermelho, feijão refrito, pico de gallo, creme azedo', price: 120.00, image: '/chilaquilles.webp' },
    { name: 'Chilli', description: 'Tortilla de farinha fresca, recheado com frango ao chipotle, Coberto com molho de queijo nacho. Arroz vermelho, feijão refrito, pico de gallo, creme azedo', price: 95.00, image: '/chilli.webp' },
    { name: 'Enchillada', description: 'Tortilla de farinha fresca, recheado com frango ao chipotle, Coberto com molho de queijo nacho. Arroz vermelho, feijão refrito, pico de gallo, creme azedo', price: 105.00, image: '/enchillada.webp' },
    { name: 'Guacamole', description: 'Tortilla de farinha fresca, recheado com frango ao chipotle, Coberto com molho de queijo nacho. Arroz vermelho, feijão refrito, pico de gallo, creme azedo', price: 115.00, image: '/guacamole.webp' },
    { name: 'Pozole', description: 'Tortilla de farinha fresca, recheado com frango ao chipotle, Coberto com molho de queijo nacho. Arroz vermelho, feijão refrito, pico de gallo, creme azedo', price: 125.00, image: '/pozole.webp' },
    { name: 'Quesadilla', description: 'Tortilla de farinha fresca, recheado com frango ao chipotle, Coberto com molho de queijo nacho. Arroz vermelho, feijão refrito, pico de gallo, creme azedo', price: 105.00, image: '/quesadilla.webp' },
    { name: 'Tacos', description: 'Tortilla de farinha fresca, recheado com frango ao chipotle, Coberto com molho de queijo nacho. Arroz vermelho, feijão refrito, pico de gallo, creme azedo', price: 95.00, image: '/tacos.webp' },
    { name: 'Tamales', description: 'Tortilla de farinha fresca, recheado com frango ao chipotle, Coberto com molho de queijo nacho. Arroz vermelho, feijão refrito, pico de gallo, creme azedo', price: 125.00, image: '/tamales.webp' },
  ];

  cart: CardapioItem[] = [];
  isModalOpen = false;
  address = '';
  showAddressWarning = false;

  get total(): number {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addToCart(name: string, price: number) {
    const existingItem = this.cart.find( item => item.name === name);
    if(existingItem){
      existingItem.quantity += 1;
    } else {
      this.cart.push({ name, price, quantity: 1});
    }
  }

  removeItemCart(name: string) {
    const index = this.cart.findIndex(item => item.name === name);
    if(index !== -1) {
      if(this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.cart.splice(index, 1)
      }
    }
  }

  checkout() {
    if(this.cart.length === 0) return;

    if(!this.address.trim()) {
      this.showAddressWarning = true;
      return;
    }

    const cartItems = this.cart.map(item => `${item.name} Quantidade: (${item.quantity}) Preço: R$${item.price}`).join(' | ');
    const phone = '5511996221043';
    const message = encodeURIComponent(cartItems + ` Endereço: ${this.address}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');

    this.cart = [];
    this.address = '';
    this.showAddressWarning = false;
  }
}
