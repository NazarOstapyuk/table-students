import {Skeleton, TableCell, TableRow} from "@mui/material";
import {memo} from "react";

interface IProps {
    rows: number;
    columns: number;
}
export const SkeletonData = memo((props: IProps) => {
    const {rows, columns} = props
    const convertNumberToArr = (num: number) => {
        const arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(i);
        }
        return arr;
    };
    return (
        <>
            {convertNumberToArr(rows).map(() => (
                <TableRow key={Math.random()}>
                    {convertNumberToArr(columns).map(() => (
                        <TableCell align="left" key={Math.random()}>
                            <Skeleton variant="text" width={"100%"} height={50} />
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </>
    )
});
