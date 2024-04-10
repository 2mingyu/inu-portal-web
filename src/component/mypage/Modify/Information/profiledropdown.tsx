import styled from "styled-components";

interface ProfileDropdownProps {
  selectedImage: string;
  images: string[]; 
  onChange: (image: string) => void; 
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ images, selectedImage, onChange }) => {
  const handleImageClick = (image: string) => {
    onChange(image); 
  };

  return (
    <DropdownWrapper>
      {images.map((image, index) => (
        <GridItem key={index} isSelected={image === selectedImage}>
          <img 
            src={image} 
            alt=""  
            onClick={() => handleImageClick(image)} 
          />
        </GridItem>
      ))}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  margin-top: 44px;
  bottom: 100px;
  display: grid;
  grid-template-columns: repeat(6, 1fr); 
  gap: 10px;
  border: 1px solid #4071B9;
  padding: 30px;
  justify-items: center;
  height: 307px;
  box-sizing: border-box;
`;

interface GridItemProps {
  isSelected: boolean;
}

const GridItem = styled.div<GridItemProps>`
  width: 58px; 
  height: 99px; 
  position: relative; 
  
  img {
    width: 100%; 
    height: 100%; 
    border: ${({ isSelected }) => isSelected ? '1px solid #4072B9' : 'none'}; 
    border-radius: 5%;
    padding:20px;
    cursor: pointer;
  }
`;
