import { join, resolve } from 'path';
import telescope from '@cosmology/telescope';

const protoDirs = [join(__dirname, '/../../stargazejs/proto')];
const launchpadDir = resolve(join(__dirname, '/../../stargazejs/../../launchpad/contracts'));
const marketplaceDir = resolve(
  join(__dirname, '/../../stargazejs/../../marketplace/contracts')
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
    dir: join(launchpadDir, "whitelists", "whitelist"),
  },
  {
    name: "WhitelistFlex",
    dir: join(launchpadDir, "whitelists", "whitelist-flex"),
  },
  {
    name: "WhitelistImmutable",
    dir: join(launchpadDir, "whitelists", "whitelist-immutable"),
  },
];

const marketplaceContracts = [
  {
    name: "Marketplace",
    dir: join(marketplaceDir, "marketplace"),
  },
  {
    name: "ReserveAuction",
    dir: join(marketplaceDir, "reserve-auction"),
  },
];

const contracts = [...launchpadContracts, ...marketplaceContracts];

telescope({
  protoDirs,
  outPath: join(__dirname, '../src/codegen'),
  options: {
    prototypes: {
      excluded: {
        packages: [
          'cosmos.auth.v1beta1',
          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.feegrant.v1beta1',
          'cosmos.genutil.v1beta1',
          'cosmos.group.v1beta1',
          'cosmos.mint.v1beta1',
          'cosmos.group.v1',
          'cosmos.msg.v1',
          'cosmos.nft.v1beta1',
          'cosmos.capability.v1beta1',
          'cosmos.orm.v1alpha1',
          'cosmos.orm.v1',
          'cosmos.params.v1beta1',
          'cosmos.slashing.v1beta1',
          'cosmos.vesting.v1beta1',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1'
        ]
      },
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        timestamp: 'date',
        duration: 'duration'
      }
    },
    cosmwasm: {
      contracts,
      outPath: join(__dirname, '../src/codegen'),
      options: {
        bundle: {
          enabled: true,
          bundleFile: 'contracts.ts',
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
        },
        reactQuery: {
          enabled: true,
          version: 'v4'
        },
        useContractsHooks: {
          enabled: true
        }
      }
    },
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
