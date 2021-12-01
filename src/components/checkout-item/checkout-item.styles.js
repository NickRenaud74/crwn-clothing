import styled, { css } from 'styled-components';


const getQuantityStyles = props => {
    if(props.quantity) {
        return css`display: flex;`
    }
}

export const StyledSpan = styled.span`
    width: 23%;
    ${getQuantityStyles}
`

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
    width: 100%;
    height: 100%;
    }
`;


export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;

export const Value = styled.span`
    margin: 0 10px;
`

export const Arrow = styled.div`
    cursor: pointer;
`

