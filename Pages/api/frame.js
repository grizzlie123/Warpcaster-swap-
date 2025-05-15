export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    frames: [
      {
        version: 'vNext',
        image: 'https://warpcaster-swap.vercel.app/frame-preview.png',
        buttons: [
          {
            label: 'Swap Now',
            action: 'link',
            target: 'https://warpcaster-swap.vercel.app/'
          }
        ],
        post_url: 'https://warpcaster-swap.vercel.app/api/frame'
      }
    ]
  });
}
