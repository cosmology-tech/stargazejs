# @stargaze-zone/chain

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184694732-f4a3d397-14fb-415a-9562-a532f510f812.png" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/stargazejs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@stargaze-zone/chain"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/stargaze-zone?filename=packages%2Fchain%2Fpackage.json"></a>
</p>

Chain Registry info for Stargaze, including asset lists.

```
npm install @stargaze-zone/chain
```

```js
import { chain, assets, asset_list } from '@stargaze-zone/chain';
```

### assets

```js
console.log(assets);
{
  '$schema': '../assetlist.schema.json',
  chain_name: 'stargaze',
  assets: [
    {
      description: 'The native token of Stargaze',
      denom_units: [Array],
      base: 'ustars',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: [Object],
      coingecko_id: 'stargaze'
    }
  ]
}
```

### chain

```js
console.log(chain);
{
  '$schema': '../chain.schema.json',
  chain_name: 'stargaze',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Stargaze',
  chain_id: 'stargaze-1',
  bech32_prefix: 'stars',
  daemon_name: 'starsd',
  node_home: '$HOME/.starsd',
  slip44: 118,
  genesis: {
    genesis_url: 'https://raw.githubusercontent.com/public-awesome/mainnet/main/stargaze-1/genesis.tar.gz'
  },
  codebase: {
    git_repo: 'https://github.com/public-awesome/stargaze',
    recommended_version: 'v6.0.1',
    compatible_versions: [ 'v6.0.1' ]
  },
  peers: {
    seeds: [ [Object], [Object], [Object], [Object], [Object] ],
    persistent_peers: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object]
    ]
  },
  apis: {
    rpc: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    rest: [ [Object], [Object], [Object], [Object], [Object] ],
    grpc: [ [Object] ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/stargaze/',
      tx_page: 'https://www.mintscan.io/stargaze/txs/${txHash}'
    },
    {
      kind: 'ping-pub',
      url: 'https://ping.pub/stargaze',
      tx_page: 'https://ping.pub/stargaze/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/stargaze',
      tx_page: 'https://atomscan.com/stargaze/transactions/${txHash}'
    }
  ]
}
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [chain-registry](https://github.com/cosmology/chain-registry) an npm module for the official Cosmos chain-registry