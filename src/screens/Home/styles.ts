import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  background-color: #00aaf2;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const ContentContainer = styled.ScrollView`
  padding: 0 16px;
`;

export const EmptyContent = styled.View``;
