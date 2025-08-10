<div align="center">

# ReSite

Chat with AI to build React apps instantly.


</div>

## Setup

1. **Clone & Install**
```bash
git clone https://github.com/vikas00x7/ReSite.git
cd open-lovable
npm install
```

2. **Add `.env.local`**
```env
# Required
E2B_API_KEY=your_e2b_api_key  # Get from https://e2b.dev (Sandboxes)
FIRECRAWL_API_KEY=your_firecrawl_api_key  # Get from https://firecrawl.dev (Web scraping)

# Optional (need at least one AI provider)
ANTHROPIC_API_KEY=your_anthropic_api_key  # Get from https://console.anthropic.com
OPENAI_API_KEY=your_openai_api_key  # Get from https://platform.openai.com (GPT-5)
GROQ_API_KEY=your_groq_api_key  # Get from https://console.groq.com (Fast inference - Kimi K2 recommended)
```

3. **Run**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)  

### Local models (optional)

You can run fully local models via Ollama.

1. Install Ollama: `https://ollama.com`
2. Pull one or more supported models:
   ```bash
   ollama pull deepseek-coder:6.7b
   ollama pull qwen2.5-coder:7b
   # optional:
   ollama pull gpt-oss:20b
   ```
3. Add to your `.env.local`:
   ```env
   # Ollama (local models)
   OLLAMA_BASE_URL=http://localhost:11434
   OLLAMA_API_KEY=ollama
   ```
4. Start the app (`npm run dev`) and pick a local model from the selector:
   - `ollama/deepseek-coder:6.7b`
   - `ollama/qwen2.5-coder:7b`
   - `ollama/gpt-oss:20b`

Notes:
- Ensure Ollama is running before generating code.
- If a model is missing, pull it with `ollama pull <model>` and retry.

Optional: OpenAI‑compatible local servers (e.g., LM Studio)

1. Run LM Studio (or similar) and expose an OpenAI‑compatible server at `http://localhost:1234/v1`.
2. Add to your `.env.local`:
   ```env
   OPENAI_BASE_URL=http://localhost:1234/v1
   ```
3. Use an appropriate model served by your local server via the OpenAI provider paths where supported.

## License

MIT