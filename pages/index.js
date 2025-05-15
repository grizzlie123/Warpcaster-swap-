import { useState } from 'react';

const tokens = [
  { symbol: 'WETH', address: '0x0000000000000000000000000000000000000001' },
  { symbol: 'USDC', address: '0x0000000000000000000000000000000000000002' },
  { symbol: 'BEAN', address: '0x0000000000000000000000000000000000000003' },
];

export default function Home() {
  const [fromToken, setFromToken] = useState(tokens[0].address);
  const [toToken, setToToken] = useState(tokens[1].address);
  const [amount, setAmount] = useState('1');

  const onSwapClick = () => {
    const swapUrl = `https://app.bean-dex.xyz/swap?from=${fromToken}&to=${toToken}&amount=${amount}`;
    window.open(swapUrl, '_blank');
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Swap Tokens on Monad Testnet (Bean DEX)</h1>
      <div style={{ marginBottom: 10 }}>
        <label>From Token: </label>
        <select value={fromToken} onChange={e => setFromToken(e.target.value)}>
          {tokens.map(t => (
            <option key={t.address} value={t.address}>
              {t.symbol}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>To Token: </label>
        <select value={toToken} onChange={e => setToToken(e.target.value)}>
          {tokens.map(t => (
            <option key={t.address} value={t.address}>
              {t.symbol}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          min="0"
          onChange={e => setAmount(e.target.value)}
          style={{ width: 100 }}
        />
      </div>
      <button
        onClick={onSwapClick}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Swap Now
      </button>
    </div>
  );
}
