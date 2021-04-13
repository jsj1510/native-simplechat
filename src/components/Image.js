import React from 'react';
import styled from 'styled-components/native';
import { images } from '../utils/images';
import { MaterialIcons } from '@expo/vector-icons';


const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;
const StyledImage = styled.Image`
  background-color: ${({ theme }) => theme.imageBackground};
  width: 100px;
  height: 100px;
  border-radius: ${({ rounded }) => ( rounded ? 50 : 0)}px;
`;
const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.imageButtonBackground};
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
const ButtonIcon = styled(MaterialIcons).attrs({
  name: 'photo-camera',
  size: 22,
})`
  color: ${({ theme }) => theme.imageButtonIcon};
`;
const PhotoButton = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonIcon />
    </ButtonContainer>
  );
};

const Image = ({ url, imageStyle, rounded, showButton }) => {
 
  return (
    <Container>
      <StyledImage source={{ uri: url }} style={imageStyle} rounded={rounded}/>
      {showButton && <PhotoButton />}
    </Container>
  );
};

images.defauldProps = {
  rounded: false,
  showButton: false,
};

export default Image;