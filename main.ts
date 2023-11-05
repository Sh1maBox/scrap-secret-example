const image = await Deno.readFile("./toka-python.png")

const handler = async (req: Request) => {
  const url = new URL(req.url)
  const tokachan = url.searchParams.get("tokachan")

  if (url.pathname === "/rev.png") {
    if (tokachan !== "tokachan") {
      return new Response(undefined, {
        headers: { "Content-Type": "image/png" },
      })
    }
    return new Response(image, {
      headers: {
        "Content-Type": "image/png",
      },
    })
  }

  if (tokachan === "tokachan") {
    return new Response(image, {
      headers: {
        "Content-Type": "image/png",
      },
    })
  }
  return new Response(undefined, {
    headers: { "Content-Type": "image/png" },
  })
}

Deno.serve({ port: 3000 }, handler)
