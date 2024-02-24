function Card() {
  const cardsData = [
    { title: "Reports", description: "Select template 1" },
    { title: "Reports", description: "Select template 2" },
    { title: "Reports", description: "Select template 3" },
    { title: "Reports", description: "Select template 4" },
    { title: "Reports", description: "Select template 5" },
    { title: "Reports", description: "Select template 6" },
    { title: "Reports", description: "Select template 7" },
    { title: "Reports", description: "Select template 8" },
    { title: "Reports", description: "Select template 9" },
    { title: "Reports", description: "Select template 10" },
  ];

  const handleGenerateClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/generate-modified-test', {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        },
      });
  
      if (response.ok) {
        // Convert the response to a Blob and create a URL
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
  
        // Create a link element and trigger a click to download the file
        const link = document.createElement('a');
        link.href = url;
        link.download = 'modifiedtest.docx';
        document.body.appendChild(link);
        link.click();
  
        // Remove the link element from the DOM
        document.body.removeChild(link);
      } else {
        console.error('Error generating modified test:', response.statusText);
      }
    } catch (error :any) {
      console.error('Error generating modified test:', error.message);

    }
  };
  

  return (
    <div className="flex flex-wrap justify-between ml-20 p-4">
      {cardsData.map((card, index) => (
        <div key={index} className="card card-compact w-44 bg-base-100 my-4 shadow-xl">
          <figure>
            <img src="https://cdn.dribbble.com/users/35810/screenshots/1219302/media/9eb3841e8d12276f1f560ef1eb3106ce.png?resize=800x600&vertical=center" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-semibold">{card.title}</h2>
            <p className="text-sm text-gray-500">{card.description}</p>
            <div className="card-actions mt-2">
            <button className="btn btn-primary" onClick={handleGenerateClick}>Generate </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;


