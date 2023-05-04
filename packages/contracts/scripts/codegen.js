import { join, resolve } from 'path';
import codegen from '@cosmwasm/ts-codegen';

const launchpadDir = resolve(join(__dirname, '/../../../launchpad/contracts'));
const marketplaceDir = resolve(
  join(__dirname, "/../../../marketplace/contracts")
);

const launchpadContracts = [
  {
    name: "SG721Base",
    dir: join(launchpadDir, "collections", "sg721-base"),
  },
  {
    name: "SG721MetadataOnchain",
    dir: join(launchpadDir, "collections", "sg721-metadata-onchain"),
  },
  {
    name: "Sg721Nt",
    dir: join(launchpadDir, "collections", "sg721-nt"),
  },
  {
    name: "Sg721Updatable",
    dir: join(launchpadDir, "collections", "sg721-updatable"),
  },
  {
    name: "BaseFactory",
    dir: join(launchpadDir, "factories", "base-factory"),
  },
  {
    name: "VendingFactory",
    dir: join(launchpadDir, "factories", "vending-factory"),
  },
  {
    name: "BaseMinter",
    dir: join(launchpadDir, "minters", "base-minter"),
  },
  {
    name: "VendingMinter",
    dir: join(launchpadDir, "minters", "vending-minter"),
  },
  {
    name: "VendingMinterWlFlex",
    dir: join(launchpadDir, "minters", "vending-minter-wl-flex"),
  },
  {
    name: "SgEthAirdrop",
    dir: join(launchpadDir, "sg-eth-airdrop"),
  },
  {
    name: "Splits",
    dir: join(launchpadDir, "splits"),
  },
  {
    name: "Whitelist",
    dir: join(launchpadDir, 'whitelists', "whitelist"),
  },
  {
    name: "WhitelistFlex",
    dir: join(launchpadDir, 'whitelists', "whitelist-flex"),
  },
  {
    name: "WhitelistImmutable",
    dir: join(launchpadDir, 'whitelists', "whitelist-immutable"),
  },
];

const marketplaceContracts = [
  {
    name: 'Marketplace',
    dir: join(marketplaceDir, 'marketplace'),
  },
  {
    name: 'ReserveAuction',
    dir: join(marketplaceDir, 'reserve-auction'),
  }
]

const contracts = [...launchpadContracts, ...marketplaceContracts]

codegen({
  contracts,
  outPath: join(__dirname, '../src/codegen'),
  options: {
    bundle: {
      enabled: true,
      bundleFile: 'index.ts',
      scope: 'contracts'
    },
    types: {
      enabled: true
    },
    client: {
      enabled: true
    },
    messageComposer: {
      enabled: true
    }
  }
}).then(() => {
  console.log('✨ all done!');
}).catch(e=>{
  console.error(e);
  process.exit(1)
});
