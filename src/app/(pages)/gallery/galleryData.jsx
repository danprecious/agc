

export const fetchData = async () => {
    
        const response = await axios.get("/api/getContents", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
      
  



}


export const gallery = {
    "Electrical Works": [
      { id: 1, src: "/image1.png", alt: "Image 1" },
      { id: 2, src: "/image2.png", alt: "Image 2", },
      { id: 3, src: "/image3.png", alt: "Image 3" },
      { id: 4, src: "/image4.png", alt: "Image 4", },
      { id: 5, src: "/image5.png", alt: "Image 5" },
      { id: 6, src: "/image6.png", alt: "Image 6" },
    ],
    "Building and Construction": [
      { id: 4, src: "/image4.png", alt: "Image 4", },
      { id: 5, src: "/image5.png", alt: "Image 5" },
      { id: 6, src: "/image6.png", alt: "Image 6" },
      { id: 1, src: "/image11.png", alt: "Image 6",  },
      { id: 2, src: "/image10.png", alt: "Image 6" },
      { id: 3, src: "/image7.png", alt: "Image 6",  },
    ],
    "Property Sales": [
      { id: 4, src: "/image6.png", alt: "Image 4",  },
      { id: 5, src: "/image7.png", alt: "Image 5" },
      { id: 1, src: "/image8.png", alt: "Image 6",  },
      { id: 2, src: "/image9.png", alt: "Image 6" },
      { id: 3, src: "/image10.png", alt: "Image 6" },
    ],
    Souvenirs: [
      { id: 4, src: "/image6.png", alt: "Image 4",  },
      { id: 5, src: "/image7.png", alt: "Image 5" },
      { id: 1, src: "/image8.png", alt: "Image 6",  },
      { id: 2, src: "/image9.png", alt: "Image 6" },
      { id: 3, src: "/image10.png", alt: "Image 6" },
    ],
  };
  