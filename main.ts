const handler = async (req: Request) => {
  if (req.headers.get("x-tokachan") === "tokachan") {
    const image = await Deno.readFile("./toka-python.png")
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
