import asyncio
from playwright.async_api import async_playwright
import os

async def capture_screenshots():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        routes = {
            'home': 'http://localhost:5173/',
            'travel': 'http://localhost:5173/travel',
            'logistics': 'http://localhost:5173/logistics',
            'shop': 'http://localhost:5173/shop',
            'contact': 'http://localhost:5173/contact'
        }

        os.makedirs('verification_jdm', exist_ok=True)

        for name, url in routes.items():
            try:
                await page.goto(url, wait_until='networkidle')
                # Wait a bit for images/fonts
                await asyncio.sleep(2)
                await page.screenshot(path=f'verification_jdm/{name}.png', full_page=True)
                print(f"Captured {name}")
            except Exception as e:
                print(f"Failed to capture {name}: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(capture_screenshots())
