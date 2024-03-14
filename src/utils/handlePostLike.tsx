const handleLike = async (token: string, postId: string) => {
  const apiURL = `https://portal.inuappcenter.kr/api/posts/${postId}/like`;
  try {
    const response = await fetch(apiURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Auth': token
      },
    });

    console.log(response,'response');
    if (response.status == 200) {
      const data = await response.json();
      return data;
    }
    else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    

  } catch (error) {
    console.log("에러?", error);
    throw error;
  }
};

export default handleLike;