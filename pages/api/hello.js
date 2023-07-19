export default function handler(req, res) {
  res.status(200).json({
    NEXT_PUBLIC_NETLIFY: process.env.NEXT_PUBLIC_NETLIFY,
    DOTENV_FETCH_WITH: process.env.DOTENV_FETCH_WITH,
    TOML_ENV_VAR: process.env.TOML_ENV_VAR,
    NEXT_PUBLIC_TOML_ENV_VAR: process.env.NEXT_PUBLIC_TOML_ENV_VAR
  });
}
