const editImage = async (token: string, postId: string, images: File[] = []) => {
    const apiURL = `https://portal.inuappcenter.kr/api/posts/${postId}/images`;
    try {
        const formData = new FormData();
        images.forEach((image, index) => {
          formData.append('images', image, `image${index}`);
        });
 
      const response = await fetch(apiURL, {
        method: 'PUT',
        headers: {
          'Auth': token
        },
        body: formData,
      });
  
      console.log(response,'response');
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        return data;
      }
      else if (response.status === 403) {
        return 403;
      }
      else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
  
    } catch (error) {
      console.log("에러?", error);
      throw error;
    }
  };
  
  export default editImage;