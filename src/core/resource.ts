// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Phoenixforgeai } from '../client';

export abstract class APIResource {
  protected _client: Phoenixforgeai;

  constructor(client: Phoenixforgeai) {
    this._client = client;
  }
}
