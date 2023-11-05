const image = await Deno.readFile("./toka-python.png")

const handler = async (req: Request) => {
  if (new URL(req.url).pathname === "/rev.png") {
    if (req.headers.get("x-tokachan") === "tokachan") {
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

  if (req.headers.get("x-tokachan") === "tokachan") {
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
