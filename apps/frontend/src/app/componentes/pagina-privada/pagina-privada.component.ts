import { Component, OnInit } from '@angular/core';
import { ProductDeletedResponse, ProductDto, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'diannemormont-pagina-privada',
  templateUrl: './pagina-privada.component.html',
  styleUrls: ['./pagina-privada.component.css']
})
export class PaginaPrivadaComponent implements OnInit {

  products: ProductDto[] = [];

  newProduct: ProductDto = {
    code: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
    url: '',
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((products: ProductDto[]) => {
      this.products = products;
    });
  }

  create() {
    if (!this.newProduct.code || !this.newProduct.name || !this.newProduct.description || !this.newProduct.price || !this.newProduct.stock) {
      alert('Title & Description are required...');
      return;
    }
    this.productService.create(this.newProduct).subscribe((product: ProductDto) => {
      this.products.push(product);
      this.newProduct = {
        code: '',
        name: '',
        description: '',
        price: 0,
        stock: 0,
        url: '',
      }
    })
  }

  update(updateProduct: ProductDto) {
    this.productService.update(updateProduct).subscribe((product: ProductDto) => {
      if(product != null){
        alert('El producto se actualizo correctamente...');
      }
      else {
        alert('El producto no se encontro')
      }
    })
  }

  delete(code?: string) {
    if (!code) {
      return;
    }
    if (window.confirm('Esta seguro de eliminar el producto...')) {
      this.productService.delete(code).subscribe((response: ProductDeletedResponse) => {
        if (response.isDeleted) {
          this.products = this.products.filter((product: ProductDto) => product.code != code);
        } else {
          alert('Oops... Something wrong happened...');
        }
      });
    }
  }
}
