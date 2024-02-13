// simulatin json
export const data = {
  products: [
    {
      id: 1,
      name: 'Moletom AI Side',
      slug: 'moletom-ai-side',
      price: 129,
      featured: true,
    },
    {
      id: 2,
      name: 'Moletom AI Side',
      slug: 'moletom-ai-side',
      price: 129,
      featured: true,
    },
    {
      id: 3,
      name: 'Moletom AI Side',
      slug: 'moletom-ai-side',
      price: 129,
      featured: true,
    },
  ],
}
export async function GET() {
  return Response.json(data.products)
}
