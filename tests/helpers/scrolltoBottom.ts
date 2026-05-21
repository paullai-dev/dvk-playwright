async function scrollToBottom(page) {
  const [scrollY, scrollHeight] = await page.evaluate(() => [
    window.scrollY,
    window.document.documentElement.scrollHeight,
  ])

  for (let i = 0; scrollY * i < scrollHeight; i += 100) {
    await page.evaluate((i) => {
      window.scrollTo(0, i, { behavior: 'smooth' })
    }, i)
    await sleep(0.1)
  }
}

function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}

// Source: https://github.com/microsoft/playwright/issues/4302#issuecomment-1882853669