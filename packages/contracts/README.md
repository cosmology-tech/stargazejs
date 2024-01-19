# @stargaze-zone/contracts

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184694732-f4a3d397-14fb-415a-9562-a532f510f812.png" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/stargazejs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@stargaze-zone/contracts"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/stargaze-zone?filename=packages%2Fcontracts%2Fpackage.json"></a>
</p>

Stargaze smart contract bindings

```
npm install @stargaze-zone/contracts
```

### Stargaze contracts

#### clients

All contracts are scoped under the `contracts` object:

```js
import { contracts } from '@stargaze-zone/contracts';
const {
    SG721Base,
    VendingFactory,
    VendingMinter,
    Whitelist
} = contracts;
```

Then each contract will have clients, for example for `Whitelist`:

```ts
const {
    WhitelistClient,
    WhitelistMessageComposer,
    WhitelistQueryClient
} = Whitelist;
```

#### Queries 

```js
const queryClient = new WhitelistQueryClient(wasmClient, contractAddress);

const hasStarted = await queryClient.hasStarted()
const members = await queryClient.members({limit: 10})
```
#### Mutations

```js
const client = new WhitelistClient(signingWasmClient, sender, contractAddress);

await client.addMembers({
    toAdd: ['name1', 'name2']
})
```

## Credits 

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes