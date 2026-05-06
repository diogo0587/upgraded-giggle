// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'update',
    endpoint: '/pet',
    httpMethod: 'put',
    summary: 'Update an existing pet',
    description: 'Update an existing pet by Id',
    stainlessPath: '(resource) pet > (method) update',
    qualified: 'client.pet.update',
    params: [
      'name: string;',
      'photoUrls: string[];',
      'id?: number;',
      'category?: { id?: number; name?: string; };',
      "status?: 'available' | 'pending' | 'sold';",
      'tags?: { id?: number; name?: string; }[];',
    ],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## update\n\n`client.pet.update(name: string, photoUrls: string[], id?: number, category?: { id?: number; name?: string; }, status?: 'available' | 'pending' | 'sold', tags?: { id?: number; name?: string; }[]): { name: string; photoUrls: string[]; id?: number; category?: object; status?: 'available' | 'pending' | 'sold'; tags?: object[]; }`\n\n**put** `/pet`\n\nUpdate an existing pet by Id\n\n### Parameters\n\n- `name: string`\n\n- `photoUrls: string[]`\n\n- `id?: number`\n\n- `category?: { id?: number; name?: string; }`\n  - `id?: number`\n  - `name?: string`\n\n- `status?: 'available' | 'pending' | 'sold'`\n  pet status in the store\n\n- `tags?: { id?: number; name?: string; }[]`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `category?: { id?: number; name?: string; }`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst pet = await client.pet.update({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.update',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pet.update({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet.id);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "api_key: $TESTEDSJ_API_KEY" \\\n    -d \'{\n          "name": "doggie",\n          "photoUrls": [\n            "string"\n          ],\n          "id": 10\n        }\'',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/pet',
    httpMethod: 'post',
    summary: 'Add a new pet to the store',
    description: 'Add a new pet to the store',
    stainlessPath: '(resource) pet > (method) create',
    qualified: 'client.pet.create',
    params: [
      'name: string;',
      'photoUrls: string[];',
      'id?: number;',
      'category?: { id?: number; name?: string; };',
      "status?: 'available' | 'pending' | 'sold';",
      'tags?: { id?: number; name?: string; }[];',
    ],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## create\n\n`client.pet.create(name: string, photoUrls: string[], id?: number, category?: { id?: number; name?: string; }, status?: 'available' | 'pending' | 'sold', tags?: { id?: number; name?: string; }[]): { name: string; photoUrls: string[]; id?: number; category?: object; status?: 'available' | 'pending' | 'sold'; tags?: object[]; }`\n\n**post** `/pet`\n\nAdd a new pet to the store\n\n### Parameters\n\n- `name: string`\n\n- `photoUrls: string[]`\n\n- `id?: number`\n\n- `category?: { id?: number; name?: string; }`\n  - `id?: number`\n  - `name?: string`\n\n- `status?: 'available' | 'pending' | 'sold'`\n  pet status in the store\n\n- `tags?: { id?: number; name?: string; }[]`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `category?: { id?: number; name?: string; }`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst pet = await client.pet.create({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.create',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pet.create({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet.id);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet \\\n    -H \'Content-Type: application/json\' \\\n    -H "api_key: $TESTEDSJ_API_KEY" \\\n    -d \'{\n          "name": "doggie",\n          "photoUrls": [\n            "string"\n          ],\n          "id": 10\n        }\'',
      },
    },
  },
  {
    name: 'find_by_status',
    endpoint: '/pet/findByStatus',
    httpMethod: 'get',
    summary: 'Finds Pets by status',
    description: 'Multiple status values can be provided with comma separated strings',
    stainlessPath: '(resource) pet > (method) find_by_status',
    qualified: 'client.pet.findByStatus',
    params: ["status?: 'available' | 'pending' | 'sold';"],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]",
    markdown:
      "## find_by_status\n\n`client.pet.findByStatus(status?: 'available' | 'pending' | 'sold'): object[]`\n\n**get** `/pet/findByStatus`\n\nMultiple status values can be provided with comma separated strings\n\n### Parameters\n\n- `status?: 'available' | 'pending' | 'sold'`\n  Status values that need to be considered for filter\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst pets = await client.pet.findByStatus();\n\nconsole.log(pets);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.findByStatus',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst pets = await client.pet.findByStatus();\n\nconsole.log(pets);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/findByStatus \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'find_by_tags',
    endpoint: '/pet/findByTags',
    httpMethod: 'get',
    summary: 'Finds Pets by tags',
    description:
      'Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.',
    stainlessPath: '(resource) pet > (method) find_by_tags',
    qualified: 'client.pet.findByTags',
    params: ['tags?: string[];'],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]",
    markdown:
      "## find_by_tags\n\n`client.pet.findByTags(tags?: string[]): object[]`\n\n**get** `/pet/findByTags`\n\nMultiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.\n\n### Parameters\n\n- `tags?: string[]`\n  Tags to filter by\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst pets = await client.pet.findByTags();\n\nconsole.log(pets);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.findByTags',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst pets = await client.pet.findByTags();\n\nconsole.log(pets);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/findByTags \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/pet/{petId}',
    httpMethod: 'get',
    summary: 'Find pet by ID',
    description: 'Returns a single pet',
    stainlessPath: '(resource) pet > (method) retrieve',
    qualified: 'client.pet.retrieve',
    params: ['petId: number;'],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## retrieve\n\n`client.pet.retrieve(petId: number): { name: string; photoUrls: string[]; id?: number; category?: object; status?: 'available' | 'pending' | 'sold'; tags?: object[]; }`\n\n**get** `/pet/{petId}`\n\nReturns a single pet\n\n### Parameters\n\n- `petId: number`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `category?: { id?: number; name?: string; }`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst pet = await client.pet.retrieve(0);\n\nconsole.log(pet);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.retrieve',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pet.retrieve(0);\n\nconsole.log(pet.id);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/$PET_ID \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'update_with_form',
    endpoint: '/pet/{petId}',
    httpMethod: 'post',
    summary: 'Updates a pet in the store with form data',
    description: 'Updates a pet in the store with form data',
    stainlessPath: '(resource) pet > (method) update_with_form',
    qualified: 'client.pet.updateWithForm',
    params: ['petId: number;', 'name?: string;', 'status?: string;'],
    markdown:
      "## update_with_form\n\n`client.pet.updateWithForm(petId: number, name?: string, status?: string): void`\n\n**post** `/pet/{petId}`\n\nUpdates a pet in the store with form data\n\n### Parameters\n\n- `petId: number`\n\n- `name?: string`\n  Name of pet that needs to be updated\n\n- `status?: string`\n  Status of pet that needs to be updated\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nawait client.pet.updateWithForm(0)\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.updateWithForm',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.pet.updateWithForm(0);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/$PET_ID \\\n    -X POST \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/pet/{petId}',
    httpMethod: 'delete',
    summary: 'Deletes a pet',
    description: 'delete a pet',
    stainlessPath: '(resource) pet > (method) delete',
    qualified: 'client.pet.delete',
    params: ['petId: number;'],
    markdown:
      "## delete\n\n`client.pet.delete(petId: number): void`\n\n**delete** `/pet/{petId}`\n\ndelete a pet\n\n### Parameters\n\n- `petId: number`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nawait client.pet.delete(0)\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.delete',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.pet.delete(0);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/$PET_ID \\\n    -X DELETE \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'upload_image',
    endpoint: '/pet/{petId}/uploadImage',
    httpMethod: 'post',
    summary: 'uploads an image',
    description: 'uploads an image',
    stainlessPath: '(resource) pet > (method) upload_image',
    qualified: 'client.pet.uploadImage',
    params: ['petId: number;', 'body: string;', 'additionalMetadata?: string;'],
    response: '{ code?: number; message?: string; type?: string; }',
    markdown:
      "## upload_image\n\n`client.pet.uploadImage(petId: number, body: string, additionalMetadata?: string): { code?: number; message?: string; type?: string; }`\n\n**post** `/pet/{petId}/uploadImage`\n\nuploads an image\n\n### Parameters\n\n- `petId: number`\n\n- `body: string`\n\n- `additionalMetadata?: string`\n  Additional Metadata\n\n### Returns\n\n- `{ code?: number; message?: string; type?: string; }`\n\n  - `code?: number`\n  - `message?: string`\n  - `type?: string`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst response = await client.pet.uploadImage(0, fs.createReadStream('path/to/file'));\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.uploadImage',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.pet.uploadImage(0, fs.createReadStream('path/to/file'));\n\nconsole.log(response.code);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/$PET_ID/uploadImage \\\n    -X POST \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'list_inventory',
    endpoint: '/store/inventory',
    httpMethod: 'get',
    summary: 'Returns pet inventories by status',
    description: 'Returns a map of status codes to quantities',
    stainlessPath: '(resource) store > (method) list_inventory',
    qualified: 'client.store.listInventory',
    response: 'object',
    markdown:
      "## list_inventory\n\n`client.store.listInventory(): object`\n\n**get** `/store/inventory`\n\nReturns a map of status codes to quantities\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst response = await client.store.listInventory();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.listInventory',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.store.listInventory();\n\nconsole.log(response);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/inventory \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/store/order',
    httpMethod: 'post',
    summary: 'Place an order for a pet',
    description: 'Place a new order in the store',
    stainlessPath: '(resource) store.order > (method) create',
    qualified: 'client.store.order.create',
    params: [
      'id?: number;',
      'complete?: boolean;',
      'petId?: number;',
      'quantity?: number;',
      'shipDate?: string;',
      "status?: 'placed' | 'approved' | 'delivered';",
    ],
    response:
      "{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }",
    markdown:
      "## create\n\n`client.store.order.create(id?: number, complete?: boolean, petId?: number, quantity?: number, shipDate?: string, status?: 'placed' | 'approved' | 'delivered'): { id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n**post** `/store/order`\n\nPlace a new order in the store\n\n### Parameters\n\n- `id?: number`\n\n- `complete?: boolean`\n\n- `petId?: number`\n\n- `quantity?: number`\n\n- `shipDate?: string`\n\n- `status?: 'placed' | 'approved' | 'delivered'`\n  Order Status\n\n### Returns\n\n- `{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n  - `id?: number`\n  - `complete?: boolean`\n  - `petId?: number`\n  - `quantity?: number`\n  - `shipDate?: string`\n  - `status?: 'placed' | 'approved' | 'delivered'`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst order = await client.store.order.create();\n\nconsole.log(order);\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.order.create',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.store.order.create();\n\nconsole.log(order.id);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/order \\\n    -X POST \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/store/order/{orderId}',
    httpMethod: 'get',
    summary: 'Find purchase order by ID',
    description:
      'For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.',
    stainlessPath: '(resource) store.order > (method) retrieve',
    qualified: 'client.store.order.retrieve',
    params: ['orderId: number;'],
    response:
      "{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }",
    markdown:
      "## retrieve\n\n`client.store.order.retrieve(orderId: number): { id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n**get** `/store/order/{orderId}`\n\nFor valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.\n\n### Parameters\n\n- `orderId: number`\n\n### Returns\n\n- `{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n  - `id?: number`\n  - `complete?: boolean`\n  - `petId?: number`\n  - `quantity?: number`\n  - `shipDate?: string`\n  - `status?: 'placed' | 'approved' | 'delivered'`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst order = await client.store.order.retrieve(0);\n\nconsole.log(order);\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.order.retrieve',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.store.order.retrieve(0);\n\nconsole.log(order.id);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/order/$ORDER_ID \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/store/order/{orderId}',
    httpMethod: 'delete',
    summary: 'Delete purchase order by ID',
    description:
      'For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors',
    stainlessPath: '(resource) store.order > (method) delete',
    qualified: 'client.store.order.delete',
    params: ['orderId: number;'],
    markdown:
      "## delete\n\n`client.store.order.delete(orderId: number): void`\n\n**delete** `/store/order/{orderId}`\n\nFor valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors\n\n### Parameters\n\n- `orderId: number`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nawait client.store.order.delete(0)\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.order.delete',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.store.order.delete(0);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/order/$ORDER_ID \\\n    -X DELETE \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/user',
    httpMethod: 'post',
    summary: 'Create user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) user > (method) create',
    qualified: 'client.user.create',
    params: [
      'id?: number;',
      'email?: string;',
      'firstName?: string;',
      'lastName?: string;',
      'password?: string;',
      'phone?: string;',
      'username?: string;',
      'userStatus?: number;',
    ],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## create\n\n`client.user.create(id?: number, email?: string, firstName?: string, lastName?: string, password?: string, phone?: string, username?: string, userStatus?: number): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**post** `/user`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `id?: number`\n\n- `email?: string`\n\n- `firstName?: string`\n\n- `lastName?: string`\n\n- `password?: string`\n\n- `phone?: string`\n\n- `username?: string`\n\n- `userStatus?: number`\n  User Status\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst user = await client.user.create();\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.create',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.user.create();\n\nconsole.log(user.id);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user \\\n    -X POST \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'create_with_list',
    endpoint: '/user/createWithList',
    httpMethod: 'post',
    summary: 'Creates list of users with given input array',
    description: 'Creates list of users with given input array',
    stainlessPath: '(resource) user > (method) create_with_list',
    qualified: 'client.user.createWithList',
    params: [
      'body?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[];',
    ],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## create_with_list\n\n`client.user.createWithList(body?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[]): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**post** `/user/createWithList`\n\nCreates list of users with given input array\n\n### Parameters\n\n- `body?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[]`\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst user = await client.user.createWithList();\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.createWithList',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.user.createWithList();\n\nconsole.log(user.id);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/createWithList \\\n    -X POST \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'login',
    endpoint: '/user/login',
    httpMethod: 'get',
    summary: 'Logs user into the system',
    description: 'Logs user into the system',
    stainlessPath: '(resource) user > (method) login',
    qualified: 'client.user.login',
    params: ['password?: string;', 'username?: string;'],
    response: 'string',
    markdown:
      "## login\n\n`client.user.login(password?: string, username?: string): string`\n\n**get** `/user/login`\n\nLogs user into the system\n\n### Parameters\n\n- `password?: string`\n  The password for login in clear text\n\n- `username?: string`\n  The user name for login\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst response = await client.user.login();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.login',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.login();\n\nconsole.log(response);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/login \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'logout',
    endpoint: '/user/logout',
    httpMethod: 'get',
    summary: 'Logs out current logged in user session',
    description: 'Logs out current logged in user session',
    stainlessPath: '(resource) user > (method) logout',
    qualified: 'client.user.logout',
    markdown:
      "## logout\n\n`client.user.logout(): void`\n\n**get** `/user/logout`\n\nLogs out current logged in user session\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nawait client.user.logout()\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.logout',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.user.logout();",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/logout \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/user/{username}',
    httpMethod: 'get',
    summary: 'Get user by user name',
    description: 'Get user by user name',
    stainlessPath: '(resource) user > (method) retrieve',
    qualified: 'client.user.retrieve',
    params: ['username: string;'],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## retrieve\n\n`client.user.retrieve(username: string): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**get** `/user/{username}`\n\nGet user by user name\n\n### Parameters\n\n- `username: string`\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nconst user = await client.user.retrieve('username');\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.retrieve',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.user.retrieve('username');\n\nconsole.log(user.id);",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/$USERNAME \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/user/{username}',
    httpMethod: 'put',
    summary: 'Update user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) user > (method) update',
    qualified: 'client.user.update',
    params: [
      'username: string;',
      'id?: number;',
      'email?: string;',
      'firstName?: string;',
      'lastName?: string;',
      'password?: string;',
      'phone?: string;',
      'username?: string;',
      'userStatus?: number;',
    ],
    markdown:
      "## update\n\n`client.user.update(username: string, id?: number, email?: string, firstName?: string, lastName?: string, password?: string, phone?: string, username?: string, userStatus?: number): void`\n\n**put** `/user/{username}`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `username: string`\n\n- `id?: number`\n\n- `email?: string`\n\n- `firstName?: string`\n\n- `lastName?: string`\n\n- `password?: string`\n\n- `phone?: string`\n\n- `username?: string`\n\n- `userStatus?: number`\n  User Status\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nawait client.user.update('username')\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.update',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.user.update('username');",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/$EXISTING_USERNAME \\\n    -X PUT \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/user/{username}',
    httpMethod: 'delete',
    summary: 'Delete user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) user > (method) delete',
    qualified: 'client.user.delete',
    params: ['username: string;'],
    markdown:
      "## delete\n\n`client.user.delete(username: string): void`\n\n**delete** `/user/{username}`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `username: string`\n\n### Example\n\n```typescript\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj();\n\nawait client.user.delete('username')\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.delete',
        example:
          "import Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.user.delete('username');",
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/$USERNAME \\\n    -X DELETE \\\n    -H "api_key: $TESTEDSJ_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'typescript',
    content:
      "# Testedsj TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/testedsj.svg?label=npm%20(stable))](https://npmjs.org/package/testedsj) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/testedsj)\n\nThis library provides convenient access to the Testedsj REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Testedsj MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=testedsj-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInRlc3RlZHNqLW1jcCJdLCJlbnYiOnsiVEVTVEVEU0pfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22testedsj-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22testedsj-mcp%22%5D%2C%22env%22%3A%7B%22TESTEDSJ_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install git+ssh://git@github.com:diogo0587/upgraded-giggle.git\n```\n> [!NOTE]\n> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npm install testedsj`\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pet.update({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet.id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  apiKey: process.env['TESTEDSJ_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: Testedsj.PetUpdateParams = { name: 'doggie', photoUrls: ['string'] };\nconst pet: Testedsj.Pet = await client.pet.update(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst pet = await client.pet\n  .update({ name: 'doggie', photoUrls: ['string'] })\n  .catch(async (err) => {\n    if (err instanceof Testedsj.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Testedsj({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.pet.update({ name: 'doggie', photoUrls: ['string'] }, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Testedsj({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.pet.update({ name: 'doggie', photoUrls: ['string'] }, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Testedsj();\n\nconst response = await client.pet.update({ name: 'doggie', photoUrls: ['string'] }).asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: pet, response: raw } = await client.pet\n  .update({ name: 'doggie', photoUrls: ['string'] })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(pet.id);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `TESTEDSJ_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Testedsj from 'testedsj';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Testedsj({\n  logger: logger.child({ name: 'Testedsj' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.pet.update({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Testedsj from 'testedsj';\nimport fetch from 'my-fetch';\n\nconst client = new Testedsj({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Testedsj from 'testedsj';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Testedsj({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Testedsj from 'testedsj';\n\nconst client = new Testedsj({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Testedsj from 'npm:testedsj';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Testedsj({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/diogo0587/upgraded-giggle/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
