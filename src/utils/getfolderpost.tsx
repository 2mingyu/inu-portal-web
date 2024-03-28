const getFolderPost = async (token:string,folderId: number,sort:string,page:number) => {
    const apiURL = `https://portal.inuappcenter.kr/api/folders/${folderId}?sort=${sort}&page=${page}`;
    try {
      const response = await fetch(apiURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Auth':token
        }
      });
  
      console.log(response,'response');
      if (response.status === 200) {
        const data = await response.json();
        return data.data;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log("에러?", error);
      throw error;
    }
  };
  
  export default getFolderPost;
