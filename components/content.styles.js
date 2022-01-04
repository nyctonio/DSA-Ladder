import styled from "styled-components";

export const ScrollContainer = styled.div`
overflow-y: scroll;
&::-webkit-scrollbar {
    width: 10px;
}
&::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
}
&::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 5px;
}
`;
