export default function handler(req, res) {
  res.status(200).json({ NEXT_PUBLIC_NETLIFY: process.env.NEXT_PUBLIC_NETLIFY });
}
