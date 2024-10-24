import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600 };
    height: 100%;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_200x
}))``;