export async function GET(req: Request) {
  //SELECT ..... ORDER BY

  /*[
          {
            id: "987432",
            image: "/imgs/products/ausberlin.jpeg",
            title: "Live aus Berlin (1999) Rammstein",
            description: "Descrição do produto 2",
            price: 59.9,
          },
          {
            id: "654321",
            image: "/imgs/products/daygusano.jpg",
            title: "Day of the Gusano: Live in Mexico (2017) Slipknot",
            description: "Descrição do produto 1",
            price: 59.9,
          },
          {
            id: "654",
            title: "Produto3",
            description: "Descrição do produto 2",
            price: 20.9,
          },

          {
            id: "123456",
            imagesUrl: "/imgs/products/sehnsucht.jpg",
            title: "Sehnsucht Anniversary Edition (2023) Rammstein",
            description: "Descrição do produto 1",
            price: 59.9,
          },
          {
            id: "456789",
            imagesUrl: "/imgs/products/iowa.jpeg",
            title: "Iowa (2001) Slipknot",
            description: "Descrição do produto 2",
            price: 45,
          },
          {
            id: "567890",
            image: "/imgs/products/skillspills.jpg",
            title: "Skills In Pills (2015) Lindemann",
            description: "Descrição do produto 2",
            price: 20.9,
          },
        ], */

  return Response.json(
    {
      message: "success",
      products: [
        {
          id: "987432",
          image: "/imgs/products/ausberlin.jpeg",
          title: "Live aus Berlin (1999) Rammstein",
          description: "Descrição do produto 2",
          price: 59.9,
        },
        {
          id: "654321",
          image: "/imgs/products/daygusano.jpg",
          title: "Day of the Gusano: Live in Mexico (2017) Slipknot",
          description: "Descrição do produto 1",
          price: 59.9,
        },
        {
          id: "654",
          title: "Produto3",
          description: "Descrição do produto 2",
          price: 20.9,
        },

        {
          id: "123456",
          imagesUrl: "/imgs/products/sehnsucht.jpg",
          title: "Sehnsucht Anniversary Edition (2023) Rammstein",
          description: "Descrição do produto 1",
          price: 59.9,
        },
        {
          id: "456789",
          imagesUrl: "/imgs/products/iowa.jpeg",
          title: "Iowa (2001) Slipknot",
          description: "Descrição do produto 2",
          price: 45,
        },
        {
          id: "567890",
          image: "/imgs/products/skillspills.jpg",
          title: "Skills In Pills (2015) Lindemann",
          description: "Descrição do produto 2",
          price: 20.9,
        },
      ],
    },
    { status: 200 }
  );
}
