import { AssetList } from '@chain-registry/types';
const asset_list: AssetList = {
  chain_name: 'stargaze',
  assets: [
    {
      description: 'The native token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/892B184DE49984FEA412E6BB8B9F2FA35E707E29DD5E9ADB515EB99B11E40837',
          exponent: 0,
          aliases: ['ucre']
        },
        {
          denom: 'cre',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/892B184DE49984FEA412E6BB8B9F2FA35E707E29DD5E9ADB515EB99B11E40837',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-21',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }
      ]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [
        {
          denom:
            'ibc/7811A811C1EBD001CA3DB637DDD7F9254E6FC0D5EFCC26163C94FBA299F77D31',
          exponent: 0,
          aliases: ['ubcre']
        },
        {
          denom: 'bcre',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/7811A811C1EBD001CA3DB637DDD7F9254E6FC0D5EFCC26163C94FBA299F77D31',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'crescent-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-21',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }
      ]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom:
            'ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D',
          exponent: 0,
          aliases: ['ujuno']
        },
        {
          denom: 'juno',
          exponent: 6
        }
      ],
      base: 'ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denom_units: [
        {
          denom:
            'ibc/412A9178A4064AB3F656493544C6EE7235C5237610311754ABC9AC001CB07D83',
          exponent: 0,
          aliases: [
            'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A'
          ]
        },
        {
          denom: 'neta',
          exponent: 6
        }
      ],
      base: 'ibc/412A9178A4064AB3F656493544C6EE7235C5237610311754ABC9AC001CB07D83',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png'
      },
      coingecko_id: 'neta',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom:
              'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }
      ]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [
        {
          denom:
            'ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD',
          exponent: 0,
          aliases: ['uscrt']
        },
        {
          denom: 'scrt',
          exponent: 6
        }
      ],
      base: 'ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }
      ]
    },
    {
      description: 'The native token of Stride',
      denom_units: [
        {
          denom:
            'ibc/55967CD055E19BF374A2556456C5760DAFDCF1D86DD85FAD08DBA806964DB2C4',
          exponent: 0,
          aliases: ['ustrd']
        },
        {
          denom: 'strd',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/55967CD055E19BF374A2556456C5760DAFDCF1D86DD85FAD08DBA806964DB2C4',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/FED316EA6AA1F52581F61D5D4B38F2A09042D5EA1DABA07B8A23C1EE3C0C4651',
          exponent: 0,
          aliases: ['stuatom']
        },
        {
          denom: 'statom',
          exponent: 6
        }
      ],
      base: 'ibc/FED316EA6AA1F52581F61D5D4B38F2A09042D5EA1DABA07B8A23C1EE3C0C4651',
      name: 'stATOM',
      display: 'statom',
      symbol: 'stATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      coingecko_id: 'stride-staked-atom',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stuatom',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/7A58490427EF0092E2BFFB4BEEBA38E29B09E9B98557DFC78335B43F15CF2676',
          exponent: 0,
          aliases: ['stustars']
        },
        {
          denom: 'ststars',
          exponent: 6
        }
      ],
      base: 'ibc/7A58490427EF0092E2BFFB4BEEBA38E29B09E9B98557DFC78335B43F15CF2676',
      name: 'stSTARS',
      display: 'ststars',
      symbol: 'stSTARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stustars',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/0AA9207D732AC65D17EF3081AE8EB96CABE26D9E8FBE27EC96BC4E3FEBD255C1',
          exponent: 0,
          aliases: ['stuosmo']
        },
        {
          denom: 'stosmo',
          exponent: 6
        }
      ],
      base: 'ibc/0AA9207D732AC65D17EF3081AE8EB96CABE26D9E8FBE27EC96BC4E3FEBD255C1',
      name: 'stOSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stuosmo',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/2D4AEA83CAECDA73C09D0FA6A5A76CAE68873C36A744212687E5A495B36BD8C6',
          exponent: 0,
          aliases: ['stujuno']
        },
        {
          denom: 'stjuno',
          exponent: 6
        }
      ],
      base: 'ibc/2D4AEA83CAECDA73C09D0FA6A5A76CAE68873C36A744212687E5A495B36BD8C6',
      name: 'stJUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      coingecko_id: '',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stujuno',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }
      ]
    }
  ]
};
export default asset_list;
