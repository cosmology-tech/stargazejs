# stargaze 

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184694732-f4a3d397-14fb-415a-9562-a532f510f812.png" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/stargazejs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

Typescript libraries for the Stargaze ecosystem.

## Packages

#### [stargazejs](packages/stargazejs)

TS library with Cosmos SDK and Stargaze smart contracts.

#### [@stargaze-zone/contracts](packages/contracts)

TS library with Stargaze smart contracts.

#### [@stargaze-zone/chain](packages/chain)

Chain Registry info for Stargaze, including asset lists.

## Developing

Checkout the repository and bootstrap the yarn workspace:

```sh
# Clone the repo.
git clone https://github.com/cosmology-tech/stargazejs
yarn
yarn bootstrap
```

### Building

```sh
yarn build
```
### Publishing

```
lerna publish
# lerna publish minor
# lerna publish major
```
## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [chain-registry](https://github.com/cosmology/chain-registry) an npm module for the official Cosmos chain-registry
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️
