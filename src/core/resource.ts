// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Testedsj } from '../client';

export abstract class APIResource {
  protected _client: Testedsj;

  constructor(client: Testedsj) {
    this._client = client;
  }
}
