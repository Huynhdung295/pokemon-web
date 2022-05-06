import { Skeleton } from "@mui/material";
import { styled } from "@mui/system";

const LazyCard = styled(Skeleton)`
  ${({ icon }) =>
    icon &&
    `
     position: absolute;
        right: 10px;
        bottom: 10px;
    `}
`;
export { LazyCard };
