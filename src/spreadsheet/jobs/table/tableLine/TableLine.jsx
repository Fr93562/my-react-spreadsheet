import { TableBody, TableRow, TableCell } from '../../../materials/global/table.styled';

function TableLine(props) {
    const { data } = props;

    return (
       <TableBody>
                {data.map((element, index) => (
                     <TableRow key={`tableLine-${index}`}>
                        {element.filters.map((value, indice) => (
                            <TableCell key={`tableLine-${index}-${indice}`}>
                                {value}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
       </TableBody>
    );
}

export default TableLine;
