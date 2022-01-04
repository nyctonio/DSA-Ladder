import styled from "styled-components";

export const ScrollContainer = styled.div`
overflow-y: scroll;
/* &::-webkit-scrollbar {
    width: 5px;
    border: 1px solid black;
} */
&::-webkit-scrollbar {
    width: 20px;
}
&::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}
&::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
}
`;
