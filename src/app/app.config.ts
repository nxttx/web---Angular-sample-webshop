import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { productReducer } from './store/product.reducer';
import { provideStoreDevtools  } from '@ngrx/store-devtools';
import { userReducer } from './store/User.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
              provideStore({ product: productReducer, user: userReducer}),
              // turn redux devtools on
              provideStoreDevtools({ maxAge: 25, logOnly: false })

            ],
};
