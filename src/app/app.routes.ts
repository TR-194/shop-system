import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full'},
    { path: 'products', loadComponent: () => import('src/app/components/products/products.component').then(m => m.ProductsComponent) },
    { path: 'cart', loadComponent: () => import('src/app/components/cart/cart.component').then(m => m.CartComponent) },
    // TODO: implement productId Routing
    //{ path: 'product/:id', loadComponent: () => import('./products/product-detail/product-detail.module').then(m => m.ProductDetailModule) },
    { path: '**', loadComponent: () => import('./components/routenotfound/routenotfound.component').then(m => m.RouteNotFoundComponent) },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
