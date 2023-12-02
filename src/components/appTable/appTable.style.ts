import styled from "styled-components";




export const TableRow = styled.tr`
  &:nth-child(odd) {
    border-left: 2px solid #1a8f4a;
    color: #1a8f4a;
  }

  &:nth-child(even) {
    border-left: 2px solid #f3f3f3;
  }
`;

export const TableData = styled.td.attrs({
    className:'text-sm font-semibold '
})`
border-bottom: 1px solid rgba(167, 207, 184, 0.4) !important;
  padding: 18px !important;
&:nth-child(){

}
`

