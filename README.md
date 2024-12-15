# Ethereum DEX Arbitrage Smart Contract

A sophisticated smart contract system for executing arbitrage trades across multiple decentralized exchanges (DEXs) on the Ethereum blockchain.

## Features

- Automated arbitrage detection and execution
- Support for multiple DEX integrations
- Configurable profit margins and trading allocations
- Secure withdrawal mechanism
- Comprehensive test coverage
- Gas-optimized operations

## Architecture

The project follows a modular architecture with clear separation of concerns:

```
contracts/
├── interfaces/     # External contract interfaces
├── libraries/      # Reusable contract logic
└── ArbitrageTrader.sol  # Main contract

test/
├── suites/        # Test suites by feature
├── utils/         # Test utilities
└── ArbitrageTrader.test.ts
```

## Key Components

1. **ArbitrageTrader.sol**
   - Main contract implementing core trading logic
   - Manages DEX integrations and trade execution
   - Implements security features and access control

2. **ArbitrageLib.sol**
   - Core arbitrage calculation logic
   - Profit calculation and validation
   - Gas-optimized operations

3. **Interfaces**
   - `IUniswapV2Router.sol`: DEX router interface
   - `IERC20.sol`: Token interface

## Security Features

- ReentrancyGuard protection
- Ownable access control
- Pausable functionality
- Input validation
- Safe math operations

## Getting Started

### Prerequisites

- Node.js >= 14
- Hardhat
- TypeScript

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install
```

### Testing

```bash
# Run all tests
npm test

# Run specific test suite
npx hardhat test test/ArbitrageTrader.test.ts
```

### Deployment

1. Configure your network in `hardhat.config.ts`
2. Set up environment variables
3. Deploy using Hardhat:

```bash
npx hardhat run scripts/deploy.ts --network <network-name>
```

## Usage

1. Deploy the contract
2. Add DEX routers using `addDexRouter()`
3. Start trading with `start()`
4. Monitor arbitrage opportunities
5. Use `stop()` to pause trading
6. Withdraw profits using `withdraw()`

## Configuration

Key parameters in `ArbitrageTrader.sol`:

- `MIN_PROFIT_MARGIN`: Minimum profit threshold (1% = 100 basis points)
- `TRADING_ALLOCATION`: Percentage of balance for trading (90% = 9000 basis points)
- `BASIS_POINTS`: Scaling factor for percentages (10000)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This software is for educational purposes only. Use at your own risk. Always test thoroughly on testnets before mainnet deployment.
