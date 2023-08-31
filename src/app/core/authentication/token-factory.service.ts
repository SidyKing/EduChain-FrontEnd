import { Injectable } from '@angular/core';
import { Token } from './interface';
import { JwtToken } from './token';

@Injectable({
  providedIn: 'root',
})
export class TokenFactory {
  create(attributes: Token): JwtToken | undefined {
    if (!attributes.token) {
      return undefined;
    }

    // if (JwtToken.is(attributes.token)) {
    //   return new JwtToken(attributes);
    // }

    // return new SimpleToken(attributes);
    return new JwtToken(attributes);
  }
}
