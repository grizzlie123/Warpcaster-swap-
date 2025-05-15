import { useState } from 'react';

const tokens = [
  { symbol: 'MON', address: '0x0000000000000000000000000000000000000000' },
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
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at top, #18004a, #0d002b)',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial',
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 0 20px rgba(123, 78, 255, 0.4)',
        width: '90%',
        maxWidth: '420px',
        backdropFilter: 'blur(10px)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src="https://raw.githubusercontent.com/monadxyz/public-assets/main/logo/monad-logo-purple.svg"
            alt="Monad Logo"
            style={{ height: '40px', marginBottom: '10px' }}
          />
          <h2 style={{ margin: 0 }}>Monad DEX Swap</h2>
          <p style={{ fontSize: '0.9em', color: '#bbb' }}>Testnet Aggregator via Bean DEX</p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>From Token:</label>
          <select
            value={fromToken}
            onChange={e => setFromToken(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '10px', border: 'none' }}
          >
            {tokens.map(t => (
              <option key={t.address} value={t.address}>
                {t.symbol}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>To Token:</label>
          <select
            value={toToken}
            onChange={e => setToToken(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '10px', border: 'none' }}
          >
            {tokens.map(t => (
              <option key={t.address} value={t.address}>
                {t.symbol}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            min="0"
            onChange={e => setAmount(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: '#2a0e5d',
              color: 'white'
            }}
          />
        </div>

        <button
          onClick={onSwapClick}
          style={{
            backgroundColor: '#7b4eff',
            color: 'white',
            border: 'none',
            padding: '14px 20px',
            borderRadius: '12px',
            width: '100%',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
        >
          🔄 Swap Now
        </button>
      </div>
    </div>
  );
              }
