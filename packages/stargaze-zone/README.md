# stargaze-zone

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184694732-f4a3d397-14fb-415a-9562-a532f510f812.png" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/stargaze-zone/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/stargaze-zone"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/stargaze-zone?filename=packages%2Fstargaze-zone%2Fpackage.json"></a>
</p>

TS library with Cosmos SDK and Stargaze smart contracts.

```
npm install stargaze-zone
```

### Cosmos SDK clients

```js
import { stargaze } from 'stargaze-zone';

const main = async () => {
   const { createLCDClient } = stargaze.ClientFactory; 
   const client = await createLCDClient({ restEndpoint: REST_ENDPOINT });

   // now you can query the modules
   const balance = await client.cosmos.bank.v1beta1
        .allBalances({ address: 'stars1addresshere' });
};
```

### Stargaze contracts

#### clients

All contracts are scoped under the `contracts` object:

```js
import { contracts } from 'stargaze-zone';
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

### CosmWasm Messages

```js
import { cosmwasm } from "stargaze-zone";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

### IBC Messages

```js
import { ibc } from 'stargaze-zone';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

### Cosmos Messages

```js
import { cosmos } from 'stargaze-zone';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```
## Credits

Built by Cosmology — if you like our tools, please consider delegating to [our validator](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.

