import { join, resolve } from 'path';
import codegen from '@cosmwasm/ts-codegen';

const contractsDir = resolve(join(__dirname, '/../../../contracts'));
const contracts = [
  {
    name: 'BaseFactory',
    dir: join(contractsDir, 'base-factory')
  },
  {
    name: 'BaseMinter',
    dir: join(contractsDir, 'base-minter')
  },
  {
    name: 'SG721Base',
    dir: join(contractsDir, 'sg721-base')
  },
  {
    name: 'SG721MetadataOnchain',
    dir: join(contractsDir, 'sg721-metadata-onchain')
  },
  {
    name: 'Sg721Nt',
    dir: join(contractsDir, 'sg721-nt')
  },
  {
    name: 'Splits',
    dir: join(contractsDir, 'splits')
  },
  {
    name: 'VendingFactory',
    dir: join(contractsDir, 'vending-factory')
  },
  {
    name: 'VendingMinter',
    dir: join(contractsDir, 'vending-minter')
  },
  {
    name: 'Whitelist',
    dir: join(contractsDir, 'whitelist')
  }
];

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
