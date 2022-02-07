import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  background-color: #00aaf2;
  padding: 16px;
  align-items: center;
`;

export const SerchInput = styled.TextInput`
  background-color: #00aaf2;
  padding: 0 8px;
  color: #fff;
  font-size: 16px;
  margin-left: 20px;
`;

export const CancelButton = styled.TouchableOpacity``;

export const ContentContainer = styled.ScrollView`
  padding: 0 16px;
`;
