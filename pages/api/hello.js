export default function handler(req, res) {
  res.status(200).json({
    DOTENV_FETCH_WITH: process.env.DOTENV_FETCH_WITH
  });
}
